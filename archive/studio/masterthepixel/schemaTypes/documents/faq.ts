import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faq',
  type: 'document',
  title: 'FAQ',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      type: 'text',
      title: 'Answer',
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
      title: 'question',
    },
  },
})