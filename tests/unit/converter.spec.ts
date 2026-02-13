// Jest globals (describe, it, expect, beforeAll, afterAll) are provided by test runner
import fs from 'fs'
import path from 'path'
import SanityToMdxConverter from '../../scripts/sanity-to-mdx'

describe('sanity-to-mdx converter', () => {
  const testOutputDir = path.join(__dirname, '..', 'fixtures', 'output')
  const sampleInputPath = path.join(__dirname, '..', 'fixtures', 'sanity', 'sample.ndjson')

  beforeAll(() => {
    // Clean up any previous test output
    if (fs.existsSync(testOutputDir)) {
      fs.rmSync(testOutputDir, { recursive: true, force: true })
    }
  })

  beforeEach(() => {
    // Ensure a clean slate for each test case
    if (fs.existsSync(testOutputDir)) {
      fs.rmSync(testOutputDir, { recursive: true, force: true })
    }
  })

  afterAll(() => {
    // Clean up test output
    if (fs.existsSync(testOutputDir)) {
      fs.rmSync(testOutputDir, { recursive: true, force: true })
    }
  })

  it('converts sample NDJSON to MDX files and creates posts.json index', async () => {
    const converter = new SanityToMdxConverter({
      inputPath: sampleInputPath,
      outputDir: testOutputDir,
      commit: true,
      report: false
    })

    const report = await converter.convert()

    // Check that files were created
    expect(fs.existsSync(path.join(testOutputDir, 'posts'))).toBe(true)
    expect(fs.existsSync(path.join(testOutputDir, 'posts', 'sample-post.mdx'))).toBe(true)
    expect(fs.existsSync(path.join(testOutputDir, 'posts.json'))).toBe(true)

    // Check the generated MDX file
    const mdxContent = fs.readFileSync(path.join(testOutputDir, 'posts', 'sample-post.mdx'), 'utf8')
    expect(mdxContent).toContain('---')
    expect(mdxContent).toContain('title: "Sample Post"')
    expect(mdxContent).toContain('slug: "sample-post"')
    expect(mdxContent).toContain('Hello world')

    // Check the posts.json index
    const postsIndex = JSON.parse(fs.readFileSync(path.join(testOutputDir, 'posts.json'), 'utf8'))
    expect(Array.isArray(postsIndex)).toBe(true)
    expect(postsIndex.length).toBe(1)
    expect(postsIndex[0]).toHaveProperty('slug', 'sample-post')
    expect(postsIndex[0]).toHaveProperty('title', 'Sample Post')

    // Check report
    expect(report.stats.posts).toBe(1)
    expect(report.stats.pages).toBe(0)
    expect(report.stats.processed).toBe(1)
  })

  it('handles dry-run mode without creating files', async () => {
    const converter = new SanityToMdxConverter({
      inputPath: sampleInputPath,
      outputDir: testOutputDir,
      dryRun: true,
      report: false
    })

    const report = await converter.convert()

    // Check that no files were created
    expect(fs.existsSync(path.join(testOutputDir, 'posts'))).toBe(false)
    expect(fs.existsSync(path.join(testOutputDir, 'posts.json'))).toBe(false)

    // Check report
    expect(report.stats.posts).toBe(1)
    expect(report.stats.pages).toBe(0)
  })
})