import React from 'react';
import Image from 'next/image';

interface AuthorProps {
  author?: {
    _id?: string;
    name?: string;
    username?: string;
    bio?: string;
    avatar?: {
      asset?: {
        url?: string;
      } | null;
    } | null;
  } | null;
  classNames?: string;
}

export default function Author({ author, classNames }: AuthorProps) {
  if (!author?.name) return null;

  return (
    <div className={`flex items-center gap-2 ${classNames || ''}`}>
      {author.avatar?.asset?.url && (
        <Image
          src={author.avatar.asset.url}
          alt={author.name}
          width={24}
          height={24}
          className="rounded-full"
        />
      )}
      <span className="text-sm text-gray-600">{author.name}</span>
    </div>
  );
}