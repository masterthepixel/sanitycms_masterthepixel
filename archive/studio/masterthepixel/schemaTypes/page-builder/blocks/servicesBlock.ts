import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicesBlock',
  type: 'object',
  title: 'Services Block',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'background',
      type: 'string',
      title: 'Background',
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Pattern', value: 'pattern' },
          { title: 'Gradient', value: 'gradient' },
        ],
      },
      initialValue: 'white',
    }),
    defineField({
      name: 'services',
      type: 'array',
      title: 'Services',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    defineField({
      name: 'buttons',
      type: 'array',
      title: 'Buttons',
      of: [{ type: 'buttonObject' }],
    }),
    defineField({
      name: 'topCornerRadius',
      type: 'string',
      title: 'Top Corner Radius',
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
        title: `Services: ${title}`,
      }
    },
  },
})