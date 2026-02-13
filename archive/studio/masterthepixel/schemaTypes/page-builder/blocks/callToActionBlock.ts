import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'callToActionBlock',
  type: 'object',
  title: 'Call to Action Block',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'buttons',
      type: 'array',
      title: 'Buttons',
      of: [{ type: 'buttonObject' }],
    }),
    defineField({
      name: 'paddingTop',
      type: 'string',
      title: 'Padding Top',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'None', value: 'none' },
          { title: 'Small', value: 'small' },
          { title: 'Large', value: 'large' },
        ],
      },
      initialValue: 'default',
    }),
    defineField({
      name: 'paddingBottom',
      type: 'string',
      title: 'Padding Bottom',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'None', value: 'none' },
          { title: 'Small', value: 'small' },
          { title: 'Large', value: 'large' },
        ],
      },
      initialValue: 'default',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `CTA: ${title}`,
      }
    },
  },
})