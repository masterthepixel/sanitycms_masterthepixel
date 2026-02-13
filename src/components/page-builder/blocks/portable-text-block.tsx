"use client"
import { cn } from '@/lib/utils';
import { PageBuilderType } from '@/types';
import Container from '@/components/global/container';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';
import { stegaClean } from 'next-sanity';

export type PortableTextBlockProps = PageBuilderType<"portableTextBlock">;

export default function PortableTextBlock(props: PortableTextBlockProps) {

  const { content, alignment, anchorId } = props;

  return (
    <section 
      {...(anchorId ? { id: anchorId } : {})}
      className='px-4 md:px-10'
    >
      <Container 
        className={cn('py-16 md:py-28 flex border-x border-dashed border-x-gray-200/60 dark:border-x-gray-700/60', {
          'justify-start': stegaClean(alignment) === 'left',
          'justify-center': stegaClean(alignment) === 'center',
          'justify-end': stegaClean(alignment) === 'right',
        })}
      >
        <div 
          className={cn('max-w-[48rem]', {
            'pl-10 border-l border-dashed border-l-gray-200/60 dark:border-l-gray-700/60': stegaClean(alignment) === 'left',
            'border-r border-dashed border-r-gray-200/60 dark:border-r-gray-700/60': stegaClean(alignment) === 'right',
          })}
        >
          <PortableTextEditor 
            data={content ?? []}
            classNames='text-balance text-gray-600 dark:text-gray-300'
          />
        </div>
      </Container>
    </section>
  )
}
