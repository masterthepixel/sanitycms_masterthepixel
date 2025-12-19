import PostGrid from './post-grid';
import { Button } from '@/components/ui/button';
import Heading from '@/components/shared/heading';

interface RelatedPostsProps {
  posts: any[];
  classNames?: string;
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className='mt-12 md:mt-24 pt-10 md:pt-16 pb-10 md:pb-16 space-y-8 border-y border-dashed'>
      <div className='py-4 flex items-center justify-between gap-6 border-y border-dashed'>
        <Heading tag="h2" size="xl">
          Related Posts
        </Heading>
        <Button variant="tertiary" size="default" buttonType="internal">
          View All Posts
        </Button>
      </div>
      <PostGrid posts={posts} />
    </section>
  )
}