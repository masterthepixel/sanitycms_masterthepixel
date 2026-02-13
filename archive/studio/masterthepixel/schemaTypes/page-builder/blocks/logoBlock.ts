import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'logoBlock',
  type: 'object',
  title: 'Logo Block',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logos',
      type: 'array',
      title: 'Logos',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
            }),
            defineField({
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'link',
              type: 'url',
              title: 'Link',
            }),
            defineField({
              name: 'size',
              type: 'string',
              title: 'Size',
              options: {
                list: [
                  { title: 'Default', value: 'default' },
                  { title: 'Large', value: 'large' },
                ],
              },
              initialValue: 'default',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `Logos: ${title}`,
      }
    },
  },
})