import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      rows: 3,
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
      name: 'seo',
      type: 'seoObject',
      title: 'SEO',
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page Builder',
      of: [
        { type: 'heroBlock' },
        { type: 'portableTextBlock' },
        { type: 'servicesBlock' },
        { type: 'callToActionBlock' },
      ],
    }),
    defineField({
      name: 'orderRank',
      type: 'string',
      title: 'Order Rank',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})