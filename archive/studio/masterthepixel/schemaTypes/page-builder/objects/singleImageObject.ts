import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'singleImageObject',
  type: 'object',
  title: 'Single Image',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'altText',
          type: 'string',
          title: 'Alt Text',
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }),
        defineField({
          name: 'aspectRatio',
          type: 'string',
          title: 'Aspect Ratio',
          options: {
            list: [
              { title: 'Square', value: 'square' },
              { title: 'Rectangle', value: 'rectangle' },
              { title: 'Wide', value: 'wide' },
            ],
          },
          initialValue: 'rectangle',
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
        defineField({
          name: 'enableBorder',
          type: 'boolean',
          title: 'Enable Border',
          initialValue: false,
        }),
        defineField({
          name: 'borderStyle',
          type: 'string',
          title: 'Border Style',
          options: {
            list: [
              { title: 'Solid', value: 'solid' },
              { title: 'Dashed', value: 'dashed' },
              { title: 'Dotted', value: 'dotted' },
            ],
          },
          initialValue: 'solid',
          hidden: ({ parent }) => !parent?.enableBorder,
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare({ media }) {
      return {
        title: 'Single Image',
        media,
      }
    },
  },
})