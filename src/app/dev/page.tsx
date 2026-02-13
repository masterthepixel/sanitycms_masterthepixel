import { getAllPosts, getPostBySlug, getPageBySlug } from '@/lib/content'
import MDXRenderer from '@/components/MDXRenderer'
import { MDXRemote } from 'next-mdx-remote/rsc' // or use @mdx-js/react directly

export default async function DevPage() {
  const posts = await getAllPosts()
  const samplePost = await getPostBySlug('sample-post')
  const samplePage = await getPageBySlug('sample-page')

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
        <h2 className="text-xl font-semibold mb-4">Sample Post</h2>
        <MDXRenderer>
          <MDXRemote source={samplePost.content} />
        </MDXRenderer>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Sample Page</h2>
        <MDXRenderer>
          <MDXRemote source={samplePage.content} />
        </MDXRenderer>
      </section>
    </div>
  )
}