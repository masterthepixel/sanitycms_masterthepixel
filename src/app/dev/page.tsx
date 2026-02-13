import { getAllPosts, getPostBySlug, getPageBySlug } from '@/lib/content'
import MDXRenderer from '@/components/MDXRenderer'

export default async function DevPage() {
  const posts = await getAllPosts()
  const samplePost = await getPostBySlug('sample-post')
  const samplePage = await getPageBySlug('sample')

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">Dev Preview: MDX Content System</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">All Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <strong>{post.title}</strong> - {post.excerpt}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Sample Post Content</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-60">
          {samplePost.content}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Sample Page Content</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-60">
          {samplePage.content}
        </pre>
      </section>
    </div>
  )
}