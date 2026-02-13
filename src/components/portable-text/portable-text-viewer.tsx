"use client"
import React from 'react';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from './portable-text-components';

interface PortableTextViewerProps {
  value: any;
  className?: string;
}

export default function PortableTextViewer({ value, className }: PortableTextViewerProps) {
  if (!value) return null;

  const defaultClass = 'prose prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-sm md:prose-p:text-base max-w-none dark:prose-invert dark:text-gray-100';

  return (
    <div className={className ?? defaultClass}>
      <PortableText value={value} components={portableTextComponents} />
    </div>
  );
}
