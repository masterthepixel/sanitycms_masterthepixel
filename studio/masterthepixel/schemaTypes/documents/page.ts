import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
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
        { type: 'headerBlock' },
        { type: 'freeformBlock' },
        { type: 'featureCardsBlock' },
        { type: 'featuresMinimalBlock' },
        { type: 'mediaBlock' },
        { type: 'testimonialBlock' },
        { type: 'logoBlock' },
        { type: 'formBlock' },
        { type: 'callToActionBlock' },
        { type: 'portableTextBlock' },
        { type: 'servicesBlock' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: slug?.current ? `/${slug.current}` : '',
      }
    },
  },
})