import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'videoObject',
  type: 'object',
  title: 'Video',
  fields: [
    defineField({
      name: 'videoType',
      type: 'string',
      title: 'Video Type',
      options: {
        list: [
          { title: 'Upload', value: 'upload' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'Vimeo', value: 'vimeo' },
        ],
      },
      initialValue: 'upload',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'videoFile',
      type: 'file',
      title: 'Video File',
      options: {
        accept: 'video/*',
      },
      hidden: ({ parent }) => parent?.videoType !== 'upload',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as any
          if (parent?.videoType === 'upload' && !value) {
            return 'Video file is required when video type is upload'
          }
          return true
        }),
    }),
    defineField({
      name: 'youtubeUrl',
      type: 'url',
      title: 'YouTube URL',
      hidden: ({ parent }) => parent?.videoType !== 'youtube',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as any
          if (parent?.videoType === 'youtube' && !value) {
            return 'YouTube URL is required when video type is YouTube'
          }
          return true
        }),
    }),
    defineField({
      name: 'vimeoUrl',
      type: 'url',
      title: 'Vimeo URL',
      hidden: ({ parent }) => parent?.videoType !== 'vimeo',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as any
          if (parent?.videoType === 'vimeo' && !value) {
            return 'Vimeo URL is required when video type is Vimeo'
          }
          return true
        }),
    }),
    defineField({
      name: 'posterImage',
      type: 'image',
      title: 'Poster Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'altText',
          type: 'string',
          title: 'Alt Text',
        }),
      ],
    }),
    defineField({
      name: 'autoplay',
      type: 'boolean',
      title: 'Autoplay',
      initialValue: false,
    }),
    defineField({
      name: 'loop',
      type: 'boolean',
      title: 'Loop',
      initialValue: false,
    }),
    defineField({
      name: 'muted',
      type: 'boolean',
      title: 'Muted',
      initialValue: true,
    }),
    defineField({
      name: 'controls',
      type: 'boolean',
      title: 'Show Controls',
      initialValue: true,
    }),
    defineField({
      name: 'aspectRatio',
      type: 'string',
      title: 'Aspect Ratio',
      options: {
        list: [
          { title: '16:9', value: '16:9' },
          { title: '4:3', value: '4:3' },
          { title: '1:1', value: '1:1' },
          { title: '21:9', value: '21:9' },
        ],
      },
      initialValue: '16:9',
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
      videoType: 'videoType',
      posterImage: 'posterImage',
    },
    prepare({ videoType, posterImage }) {
      return {
        title: `Video (${videoType})`,
        media: posterImage,
      }
    },
  },
})