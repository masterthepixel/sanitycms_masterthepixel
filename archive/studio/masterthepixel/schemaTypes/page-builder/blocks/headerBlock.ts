import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'headerBlock',
  type: 'object',
  title: 'Header Block',
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
      name: 'bottomCornerRadius',
      type: 'string',
      title: 'Bottom Corner Radius',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Rounded', value: 'rounded' },
          { title: 'Straight', value: 'straight' },
        ],
      },
      initialValue: 'rounded',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `Header: ${title}`,
      }
    },
  },
})