import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Heading from '@/components/shared/heading';
import Container from '@/components/global/container';
import { ButtonType, PageBuilderType } from '@/types';

export type FreeformBlockProps = PageBuilderType<"freeformBlock">;

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

export default function FreeformBlock(props: FreeformBlockProps) {

  const { columnsPerRow, columns, border, anchorId } = props;

  return (
    <section
      {...(anchorId ? { id: anchorId } : {})}
      className='px-4 md:px-10'
    >
      <Container
        className={cn('py-16 md:py-28 border-x border-dashed', {
          'border-y': (border) === 'topBottom',
          'border-t': (border) === 'top',
          'border-b': (border) === 'bottom',
        })}
      >
        <div
          className={cn('grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8', {
            'md:grid-cols-3': (columnsPerRow) === '3',
            'md:grid-cols-4': (columnsPerRow) === '4',
          })}
        >
          {columns?.map((column) => (
            <div
              key={column?._key}
              className={cn('flex flex-col items-start justify-center gap-0', {
                'gap-2': (column?.spacing) === 'small',
                'gap-3': (column?.spacing) === 'medium',
                'gap-4': (column?.spacing) === 'large',
                'items-center': (column?.alignment) === 'center',
                'items-end': (column?.alignment) === 'right',
              })}
            >
              {column?.items?.map((item) => (
                <React.Fragment key={item?._key}>
                  {(item?._type === 'headingObject' && item?.headingText) && (
                    <Heading tag={item?.headingTag} size={item?.headingSize}>
                      {item?.headingText}
                    </Heading>
                  )}
                  {(item?._type === 'spacerObject' && item?.spacing) && (
                    <div
                      key={item?._key}
                      className={cn('h-0', {
                        'h-4': (item?.spacing) === 'small',
                        'h-6': (item?.spacing) === 'medium',
                        'h-8': (item?.spacing) === 'large',
                      })}
                    />
                  )}
                  {(item?._type === 'richTextObject' && item?.richTextContent) && (
                    <div className='text-balance'>
                      {renderContent(item?.richTextContent)}
                    </div>
                  )}
                  {(item?._type === 'singleImageObject' && item?.image?.asset?.url) && (
                    <div className='p-3 border border-dashed rounded-3xl pattern-bg--2'>
                      <Image
                        src={item?.image?.asset?.url ?? ''}
                        width={800}
                        height={800}
                        alt={item?.image?.asset?.altText ?? ''}
                        className={cn('object-cover aspect-square rounded-2xl', {
                          'aspect-[3/2]': (item?.image?.aspectRatio) === 'rectangle',
                          'aspect-[3/4]': (item?.image?.aspectRatio) === 'portrait',
                        })}
                      />
                    </div>
                  )}
                  {(item?._type === 'buttonObject' && item?.buttonText) && (
                    <Button
                      size="sm"
                      variant={(item?.buttonVariant)}
                      buttonType={item?.buttonType}
                      pageReference={item?.buttonPageReference as ButtonType['buttonPageReference']}
                      externalUrl={item?.buttonExternalUrl ?? ''}
                    >
                      {item?.buttonText}
                    </Button>
                  )}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}