import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicesPage',
  type: 'document',
  title: 'Services Page',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
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
        { type: 'servicesBlock' },
        { type: 'callToActionBlock' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Services Page',
      }
    },
  },
})