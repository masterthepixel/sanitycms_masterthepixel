#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * NDJSON Pre-processor & Validator
 * Fixes common issues and validates each line with JSON.parse
 */

function fixCommonIssues(line) {
  // Fix stray commas after {
  line = line.replace(/{,\s*/g, '{');

  // Fix malformed escapes (basic fix)
  line = line.replace(/\\(?!["\\/bfnrt]|u[0-9a-fA-F]{4})/g, '\\\\');

  return line;
}

function validateAndCleanNdjson(inputPath, options = {}) {
  const { inPlace = false, report = true } = options;

  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input file not found: ${inputPath}`);
  }

  const content = fs.readFileSync(inputPath, 'utf8');
  const lines = content.trim().split('\n');

  const results = {
    total: lines.length,
    valid: 0,
    invalid: 0,
    fixed: 0,
    errors: []
  };

  const cleanedLines = [];

  for (let i = 0; i < lines.length; i++) {
    const originalLine = lines[i].trim();
    if (!originalLine) continue;

    let line = originalLine;
    let wasFixed = false;

    try {
      JSON.parse(line);
      results.valid++;
      cleanedLines.push(line);
    } catch (error) {
      // Try to fix common issues
      const fixedLine = fixCommonIssues(line);
      if (fixedLine !== line) {
        wasFixed = true;
        line = fixedLine;
      }

      try {
        JSON.parse(line);
        results.valid++;
        results.fixed++;
        cleanedLines.push(line);
        if (report) {
          console.log(`Fixed line ${i + 1}: ${error.message}`);
        }
      } catch (finalError) {
        results.invalid++;
        results.errors.push({
          line: i + 1,
          original: originalLine,
          error: finalError.message
        });
        if (report) {
          console.error(`Invalid line ${i + 1}: ${finalError.message}`);
          console.error(`  Original: ${originalLine}`);
        }
        // Keep the original line if it can't be fixed
        cleanedLines.push(originalLine);
      }
    }
  }

  if (inPlace && results.fixed > 0) {
    fs.writeFileSync(inputPath, cleanedLines.join('\n') + '\n');
  }

  if (report) {
    console.log('\n=== NDJSON Validation Report ===');
    console.log(`Total lines: ${results.total}`);
    console.log(`Valid: ${results.valid}`);
    console.log(`Fixed: ${results.fixed}`);
    console.log(`Invalid: ${results.invalid}`);

    if (results.errors.length > 0) {
      console.log('\nErrors:');
      results.errors.forEach(err => {
        console.log(`  Line ${err.line}: ${err.error}`);
      });
    }
  }

  return results;
}

// CLI interface
function main() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.error('Usage: node scripts/ndjson-cleaner.js <input-file> [--in-place] [--report]');
    process.exit(1);
  }

  const inputPath = args[0];
  const inPlace = args.includes('--in-place');
  const report = !args.includes('--no-report'); // Default to report unless --no-report

  try {
    const results = validateAndCleanNdjson(inputPath, { inPlace, report });

    if (results.invalid > 0) {
      console.error(`\nWarning: ${results.invalid} lines could not be validated.`);
      process.exit(1);
    }

    console.log('\nNDJSON cleaning completed successfully.');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { validateAndCleanNdjson, fixCommonIssues };