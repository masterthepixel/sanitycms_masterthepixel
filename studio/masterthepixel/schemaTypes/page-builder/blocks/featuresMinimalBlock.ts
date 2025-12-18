import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'featuresMinimalBlock',
  type: 'object',
  title: 'Features Minimal Block',
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
      name: 'cornerRadiusTop',
      type: 'string',
      title: 'Top Corner Radius',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Rounded', value: 'rounded' },
          { title: 'Straight', value: 'straight' },
        ],
      },
      initialValue: 'rounded',
    }),
    defineField({
      name: 'cornerRadiusBottom',
      type: 'string',
      title: 'Bottom Corner Radius',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Rounded', value: 'rounded' },
          { title: 'Straight', value: 'straight' },
        ],
      },
      initialValue: 'straight',
    }),
    defineField({
      name: 'enableBorderTop',
      type: 'boolean',
      title: 'Enable Top Border',
      initialValue: true,
    }),
    defineField({
      name: 'enableBorderBottom',
      type: 'boolean',
      title: 'Enable Bottom Border',
      initialValue: false,
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'buttons',
      type: 'array',
      title: 'Buttons',
      of: [{ type: 'buttonObject' }],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `Features Minimal: ${title}`,
      }
    },
  },
})