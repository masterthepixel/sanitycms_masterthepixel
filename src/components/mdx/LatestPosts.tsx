"use client"

import React from 'react'
import PostCard from '@/app/(frontend)/blog/_components/post-card'
import { Post } from '@/types/content'

export default function LatestPosts({ posts }: { posts?: Post[] }) {
  if (!posts || posts.length === 0) {
    return (
      <section className="py-16 text-center text-gray-500">No recent posts available.</section>
    )
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="min-h-[220px]">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
