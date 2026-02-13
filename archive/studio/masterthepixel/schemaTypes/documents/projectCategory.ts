import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'projectCategory',
  type: 'document',
  title: 'Project Category',
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
      name: 'orderRank',
      type: 'string',
      title: 'Order Rank',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})