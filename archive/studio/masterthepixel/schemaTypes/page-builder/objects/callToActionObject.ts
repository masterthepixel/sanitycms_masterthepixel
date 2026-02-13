import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'callToActionObject',
  type: 'object',
  title: 'Call to Action',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'subheading',
      type: 'text',
      title: 'Subheading',
      rows: 3,
    }),
    defineField({
      name: 'buttons',
      type: 'array',
      title: 'Buttons',
      of: [
        {
          type: 'buttonObject',
        },
      ],
      validation: (rule) => rule.max(2),
    }),
    defineField({
      name: 'background',
      type: 'string',
      title: 'Background',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
          { title: 'Primary', value: 'primary' },
          { title: 'Gradient', value: 'gradient' },
        ],
      },
      initialValue: 'light',
    }),
    defineField({
      name: 'alignment',
      type: 'string',
      title: 'Alignment',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'center',
    }),
    defineField({
      name: 'padding',
      type: 'string',
      title: 'Padding',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
      },
      initialValue: 'medium',
    }),
    defineField({
      name: 'cornerRadius',
      type: 'string',
      title: 'Corner Radius',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Rounded', value: 'rounded' },
          { title: 'Full', value: 'full' },
        ],
      },
      initialValue: 'rounded',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      background: 'background',
    },
    prepare({ heading, background }) {
      return {
        title: heading || 'Call to Action',
        subtitle: `Background: ${background}`,
      }
    },
  },
})