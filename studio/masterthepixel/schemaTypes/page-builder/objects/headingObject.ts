import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'headingObject',
  type: 'object',
  title: 'Heading',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'level',
      type: 'string',
      title: 'Heading Level',
      options: {
        list: [
          { title: 'H1', value: 'h1' },
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
          { title: 'H5', value: 'h5' },
          { title: 'H6', value: 'h6' },
        ],
      },
      initialValue: 'h2',
      validation: (rule) => rule.required(),
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
      initialValue: 'left',
    }),
    defineField({
      name: 'color',
      type: 'string',
      title: 'Color',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Accent', value: 'accent' },
        ],
      },
      initialValue: 'default',
    }),
    defineField({
      name: 'size',
      type: 'string',
      title: 'Size',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
          { title: 'Extra Large', value: 'extraLarge' },
        ],
      },
      initialValue: 'medium',
    }),
  ],
  preview: {
    select: {
      text: 'text',
      level: 'level',
    },
    prepare({ text, level }) {
      return {
        title: text || 'Heading',
        subtitle: level?.toUpperCase(),
      }
    },
  },
})