"use client"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { PageBuilderType } from '@/types';
import Heading from '@/components/shared/heading';
import Container from '@/components/global/container';
import PlayVideo from '@/components/shared/play-video';
import ButtonRenderer from '@/components/shared/button-renderer';

export type HeroBlockProps = PageBuilderType<"heroBlock">;

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

export default function HeroBlock(props: HeroBlockProps) {

  const {
    heading,
    content,
    mediaType,
    bottomCornerRadius,
    buttons,
    image,
    dialogType,
    videoUrl,
    overlayType,
    anchorId,
    fullWidth
  } = props;

  return (
    <section
      {...(anchorId ? { id: anchorId } : {})}
      className={cn('px-4 md:px-10 pattern-bg border-b border-b-gray-200/60', {
        'rounded-3xl md:rounded-4xl': bottomCornerRadius === 'rounded'
      })}
    >
      <Container
        variant={fullWidth ? 'fullWidth' : 'contained'}
        className={cn('space-y-10 xl:-space-y-6', {
          'pb-7 md:pb-12': mediaType === 'image',
          'max-w-7xl': !fullWidth
        })}
      >
        {/* center the hero grid so the textual content stays constrained */}
        <div className="mx-auto w-full max-w-7xl">
          <div
            className={cn('pt-36 md:pt-52 pb-16 md:pb-24 xl:pb-36 grid grid-cols-12 gap-3 md:gap-6 xl:gap-14 md:px-14 md:border-x md:border-dashed', {
              'pb-6': mediaType === 'image'
            })}
          >
          <div className='col-span-12 xl:col-span-7'>
            <Heading size="xxl" tag="h1" className='md:max-w-[40rem] text-balance leading-tight'>
              {heading}
            </Heading>
          </div>
          <div className='col-span-12 xl:col-span-5'>
            <div className='mt-3 md:text-lg text-gray-600 text-balance'>
              {renderContent(content)}
            </div>
            {buttons && buttons.length > 0 && (
              <div className='mt-8 md:mt-10'>
                <ButtonRenderer buttons={buttons} />
              </div>
            )}
          </div>
        </div>
        </div>

        {/* media handling: for fullWidth heroes render the image full-bleed, otherwise keep it contained */}
        {mediaType === 'image' && image && (image?.asset?.url || image?.url) && (
          fullWidth ? (
            <div className="w-full">
              <div className='overflow-hidden relative h-full w-full'>
                <Image
                  priority
                  width={2000}
                  height={900}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={image?.asset?.url || image?.url || '/assets/placeholder-cover.jpg'}
                  alt={image?.asset?.altText || image?.altText || 'Hero image'}
                  className={cn('w-full h-auto object-cover', {
                    'max-h-[30rem]': image?.height === 'short'
                  })}
                />
                {overlayType === 'dark' && (
                  <DarkOverlay />
                )}
                {dialogType === 'video' && videoUrl && (
                  <PlayVideo videoUrl={videoUrl} />
                )}
              </div>
            </div>
          ) : (
            // contained / default behaviour
            <div className='p-4 md:p-6 border border-dashed rounded-3xl md:rounded-4xl pattern-bg--2'>
              <div className='overflow-hidden relative h-full w-full rounded-3xl md:rounded-4xl'>
                <Image
                  priority
                  width={1400}
                  height={800}
                  sizes="(max-width: 640px) 100vw, 700px"
                  src={image?.asset?.url || image?.url || '/assets/placeholder-cover.jpg'}
                  alt={image?.asset?.altText || image?.altText || 'Hero image'}
                  className={cn('w-full h-auto object-cover rounded-2xl md:rounded-3xl', {
                    'max-h-[30rem]': image?.height === 'short'
                  })}
                />
                {overlayType === 'dark' && (
                  <DarkOverlay />
                )}
                {dialogType === 'video' && videoUrl && (
                  <PlayVideo videoUrl={videoUrl} />
                )}
              </div>
            </div>
          )
        )}
        </Container>
    </section>
  )
}

function DarkOverlay() {
  return (
    <>
      <div className='absolute inset-0 bg-black/20' />
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-[50%] w-full' />
    </>
  )
}