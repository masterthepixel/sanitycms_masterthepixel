import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

interface AuthorData {
  _id?: string;
  name?: string;
  username?: string;
  bio?: string;
  avatar?: {
    asset?: {
      url?: string;
    } | null;
  } | null;
}

interface AuthorProps {
  author: AuthorData | null;
  classNames?: string;
}

export default function Author({ author, classNames }: AuthorProps) {

  if (!author) return null;

  const avatarUrl = author?.avatar?.asset?.url;
  
  // Only render Image if there's a valid URL
  if (!avatarUrl) {
    return (
      <div className='w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center'>
        <span className='text-xs text-gray-500'>{author.name?.[0] || '?'}</span>
      </div>
    );
  }

  return (
    <HoverCard>
      <HoverCardTrigger>
        <Image
          src={avatarUrl}
          width={26}
          height={26}
          alt={author.name ?? 'Author avatar'}
          className='rounded-full'
        />
      </HoverCardTrigger>
      <HoverCardContent className={classNames}>
        <div className='text-sm font-semibold antialiased'>
          {author.name}
        </div>
        <div className='text-sm text-gray-600'>
          @{author.username}
        </div>
        <div className='mt-3 pt-3 border-t border-dashed text-sm text-gray-600'>
          {author.bio}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}