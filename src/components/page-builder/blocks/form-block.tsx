"use client"
import { PageBuilderType } from '@/types';
import Form from '@/components/shared/form';
import Heading from '@/components/shared/heading';
import Container from '@/components/global/container';

export type FormBlockProps = PageBuilderType<"formBlock">;

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

export default function FormBlock(props: FormBlockProps) {

  const { heading, content, form, anchorId } = props;

  return (
    <section
      {...(anchorId ? { id: anchorId } : {})}
      className='px-4 xl:px-10 pattern-bg'
    >
      <Container className='py-16 md:py-28 border-x border-dashed'>
        <div className='flex flex-col justify-center items-center gap-4 md:gap-6'>
          {heading && (
            <Heading tag="h2" size="xl" className='text-balance text-center leading-normal'>
              {heading}
            </Heading>
          )}
          {content && (
            <div className='max-w-[320px] mb-4 md:text-xl text-balance text-center text-gray-600'>
              {renderContent(content)}
            </div>
          )}
          {form && (
            <Form form={form} />
          )}
        </div>
      </Container>
    </section>
  )
}