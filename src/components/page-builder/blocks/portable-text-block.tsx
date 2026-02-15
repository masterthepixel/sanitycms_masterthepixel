"use client"
import { cn } from '@/lib/utils';
import { PageBuilderType } from '@/types';
import Container from '@/components/global/container';


export type PortableTextBlockProps = PageBuilderType<"portableTextBlock">;

function renderContent(content: any) {
  if (Array.isArray(content)) {
    // Handle legacy Portable Text arrays - just extract text
    return content.map((block: any) => block.children?.map((child: any) => child.text).join('') || '').join(' ');
  }
  if (typeof content === 'string') {
    return content;
  }
  return '';
}

export default function PortableTextBlock(props: PortableTextBlockProps) {

  const { content, alignment, anchorId } = props;

  return (
    <section
      {...(anchorId ? { id: anchorId } : {})}
      className='px-4 md:px-10'
    >
      <Container
        className={cn('py-16 md:py-28 flex border-x border-dashed border-dashed-light', {
          'justify-start': alignment === 'left',
          'justify-center': alignment === 'center',
          'justify-end': alignment === 'right',
        })}
      >
        <div
          className={cn('max-w-[48rem]', {
            'pl-10 border-l border-dashed border-dashed-light': alignment === 'left',
            'border-r border-dashed border-dashed-light': alignment === 'right',
          })}
        >
          <div className='text-balance text-gray-600'>
            {renderContent(content)}
          </div>
        </div>
      </Container>
    </section>
  )
}
