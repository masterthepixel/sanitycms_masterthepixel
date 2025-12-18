import React from 'react';

interface DateComponentProps {
  date?: string | null;
}

export default function DateComponent({ date }: DateComponentProps) {
  if (!date) return null;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <span className="text-sm text-gray-600">
      {formattedDate}
    </span>
  );
}