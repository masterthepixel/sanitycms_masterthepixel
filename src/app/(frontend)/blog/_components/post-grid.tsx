import React from 'react';
import PostCard from './post-card';

interface Post {
  _id: string;
  _type: string;
  _createdAt: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  category?: {
    _id: string;
    title?: string;
    slug?: string;
  } | null;
  author?: {
    _id: string;
    name?: string;
    username?: string;
    bio?: string;
    avatar?: {
      asset?: {
        url?: string;
      } | null;
    } | null;
  } | null;
  image?: {
    asset?: {
      url?: string;
    } | null;
    altText?: string;
  } | null;
}

interface PostGridProps {
  posts: Post[];
}

export default function PostGrid({ posts }: PostGridProps) {
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  )
}