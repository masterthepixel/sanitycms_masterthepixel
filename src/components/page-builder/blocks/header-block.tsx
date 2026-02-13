import { cn } from '@/lib/utils';
import { PageBuilderType } from '@/types';
import Heading from '@/components/shared/heading';
import Container from '@/components/global/container';

export type HeaderBlockProps = PageBuilderType<"headerBlock">;

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

export default function HeaderBlock(props: HeaderBlockProps) {

  const { heading, content, bottomCornerRadius, anchorId } = props;

  return (
    <section
      {...(anchorId ? { id: anchorId } : {})}
      className={cn('px-4 md:px-10 pattern-bg border-b', {
        'rounded-4xl': bottomCornerRadius === 'rounded'
      })}
    >
      <Container className='border-x border-dashed'>
        <div className='pt-36 md:pt-52 pb-20 md:pb-36'>
          <Heading tag="h1" size="xxl" className='text-balance leading-normal'>
            {heading}
          </Heading>
          <div className='mt-6 md:mt-8 md:text-xl text-balance text-gray-600'>
            {renderContent(content)}
          </div>
        </div>
      </Container>
    </section>
  )
}
