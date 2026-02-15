import { PageBuilderType } from '@/types';
import Heading from '@/components/shared/heading';
import Container from '@/components/global/container';
import ButtonRenderer from '@/components/shared/button-renderer';

export type CallToActionBlockProps = PageBuilderType<"callToActionBlock">;

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

export default function CallToActionBlock(props: CallToActionBlockProps) {

  const { heading, content, buttons, anchorId } = props;

  return (
    <section 
      {...(anchorId ? { id: anchorId } : {})}
      className='xl:px-10 pattern-bg--2 border-t border-t-gray-200/60'
    >
      <Container className='py-16 md:py-28 border-x border-dashed border-dashed-light'>
        <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-x-16'>
          <div>
            <Heading tag="h2" size="xl" className='max-w-[40rem] text-balance leading-tight'>
              {heading}
            </Heading>
            <div className='mt-6 md:mt-8 text-balance text-gray-600'>
              {renderContent(content)}
            </div>
          </div>
          {buttons && buttons.length > 0 && (
            <div className='mt-10'>
              <ButtonRenderer buttons={buttons} />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}