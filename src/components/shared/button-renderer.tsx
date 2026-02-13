import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonType } from '@/types';
import { Button } from '../ui/button';

export default function ButtonRenderer({ buttons, classNames }: {
  buttons: ButtonType[];
  classNames?: string;
}) {

  if (!buttons?.length) return null;

  return (
    <div className={cn('flex items-center gap-3 list-none', classNames)}>
      {buttons.map((button) => (
        <Button
          key={`button-${button?._key}`}
          variant={(button?.buttonVariant) as 'primary' | 'secondary' | 'tertiary' | 'outline' | 'underline' ?? 'primary'} 
          buttonType={(button?.buttonType) ?? 'external'}
          width={(button?.buttonWidth) as 'auto' | 'fullWidth' ?? 'auto'}
          pageReference={(button?.buttonPageReference) ?? null}
          externalUrl={(button?.buttonExternalUrl) ?? ''}
          emailAddress={(button?.buttonEmailAddress) ?? ''}
          fileUrl={(button?.buttonFileUrl)?.asset?.url}
          anchorLocation={(button?.buttonAnchorLocation) ?? 'currentPage'}
          anchorId={(button?.buttonAnchorId) ?? ''}
          className={cn('w-auto', { 
            'w-full': (button?.buttonWidth) === 'fullWidth' 
          })}
        >
          {button?.buttonText}
        </Button>
      ))}
    </div>
  )
}