const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const contentDirs = [path.join(process.cwd(), 'content', 'posts'), path.join(process.cwd(), 'content', 'pages')]
let failed = false
const results = []

contentDirs.forEach((dir) => {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const raw = fs.readFileSync(filePath, 'utf8')
    const parsed = matter(raw)
    const fm = parsed.data || {}
    const isDraft = fm.draft === true || fm.status === 'draft'
    const missing = []
    if (!isDraft) {
      if (!fm.seo || !fm.seo.title) missing.push('seo.title')
      if (!fm.seo || !fm.seo.description) missing.push('seo.description')
      if (!fm.coverImage) missing.push('coverImage')
    }
    if (missing.length) {
      failed = true
      results.push({ file: path.relative(process.cwd(), filePath), missing })
    }
  })
})

if (results.length) {
  console.error('\nFrontmatter parity check failed for the following files:')
  results.forEach((r) => console.error(` - ${r.file}: missing [${r.missing.join(', ')}]`))
  console.error('\nAdd the missing frontmatter keys or mark the post as draft to skip this check.')
  process.exit(1)
} else {
  console.log('Frontmatter parity check passed — all non-draft MDX files include required SEO fields and coverImage.')
  process.exit(0)
}
