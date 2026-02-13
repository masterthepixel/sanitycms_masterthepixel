import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'redirect',
  type: 'document',
  title: 'Redirect',
  fields: [
    defineField({
      name: 'source',
      type: 'string',
      title: 'Source URL',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'destination',
      type: 'string',
      title: 'Destination URL',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'permanent',
      type: 'boolean',
      title: 'Permanent (301)',
      description: 'Use 301 redirect instead of 302',
      initialValue: false,
    }),
    defineField({
      name: 'isEnabled',
      type: 'boolean',
      title: 'Enabled',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      source: 'source',
      destination: 'destination',
      permanent: 'permanent',
    },
    prepare({ source, destination, permanent }) {
      return {
        title: source,
        subtitle: `${permanent ? '301' : '302'} → ${destination}`,
      }
    },
  },
})