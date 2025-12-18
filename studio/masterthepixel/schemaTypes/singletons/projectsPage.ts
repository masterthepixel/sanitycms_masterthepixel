import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'projectsPage',
  type: 'document',
  title: 'Projects Page',
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
        { type: 'callToActionBlock' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Projects Page',
      }
    },
  },
})