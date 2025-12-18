import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'heroBlock',
  type: 'object',
  title: 'Hero Block',
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
      name: 'mediaType',
      type: 'string',
      title: 'Media Type',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'None', value: 'none' },
        ],
      },
      initialValue: 'image',
    }),
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
          name: 'height',
          type: 'string',
          title: 'Height',
          options: {
            list: [
              { title: 'Short', value: 'short' },
              { title: 'Medium', value: 'medium' },
              { title: 'Tall', value: 'tall' },
              { title: 'Full', value: 'full' },
            ],
          },
          initialValue: 'medium',
        }),
      ],
      hidden: ({ parent }) => parent?.mediaType !== 'image',
    }),
    defineField({
      name: 'videoUrl',
      type: 'url',
      title: 'Video URL',
      hidden: ({ parent }) => parent?.mediaType !== 'video',
    }),
    defineField({
      name: 'overlayType',
      type: 'string',
      title: 'Overlay Type',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Dark', value: 'dark' },
          { title: 'Light', value: 'light' },
        ],
      },
      initialValue: 'none',
    }),
    defineField({
      name: 'dialogType',
      type: 'string',
      title: 'Dialog Type',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Video', value: 'video' },
        ],
      },
      initialValue: 'none',
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
    defineField({
      name: 'showBackButton',
      type: 'boolean',
      title: 'Show Back Button',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: `Hero: ${title}`,
        media,
      }
    },
  },
})