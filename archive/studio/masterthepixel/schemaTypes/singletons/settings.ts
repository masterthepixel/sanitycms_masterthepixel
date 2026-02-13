import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'settings',
  type: 'document',
  title: 'Settings',
  fields: [
    defineField({
      name: 'siteTitle',
      type: 'string',
      title: 'Site Title',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      }
    },
  },
})