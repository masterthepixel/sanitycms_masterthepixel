import React from 'react';
import PostCard from './post-card';
import { Post } from '@/types/content';

interface PostGridProps {
  posts: Post[];
}

export default function PostGrid({ posts }: PostGridProps) {
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}