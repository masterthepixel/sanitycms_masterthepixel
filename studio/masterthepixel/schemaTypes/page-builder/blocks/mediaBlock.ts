import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'mediaBlock',
  type: 'object',
  title: 'Media Block',
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
      ],
    }),
    defineField({
      name: 'videoUrl',
      type: 'url',
      title: 'Video URL',
    }),
    defineField({
      name: 'backgroundType',
      type: 'string',
      title: 'Background Type',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'Color', value: 'color' },
        ],
      },
      initialValue: 'image',
    }),
    defineField({
      name: 'backgroundWidth',
      type: 'string',
      title: 'Background Width',
      options: {
        list: [
          { title: 'Full', value: 'full' },
          { title: 'Container', value: 'container' },
        ],
      },
      initialValue: 'full',
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
      initialValue: 'dark',
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
      initialValue: 'video',
    }),
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare({ media }) {
      return {
        title: 'Media Block',
        media,
      }
    },
  },
})