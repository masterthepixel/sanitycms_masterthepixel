import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'postCategory',
  type: 'document',
  title: 'Post Category',
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
      name: 'categoryColor',
      type: 'object',
      title: 'Category Color',
      fields: [
        defineField({
          name: 'label',
          type: 'string',
          title: 'Label',
        }),
        defineField({
          name: 'value',
          type: 'string',
          title: 'Value',
        }),
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
      color: 'categoryColor.value',
    },
    prepare({ title, color }) {
      return {
        title,
        subtitle: color ? `Color: ${color}` : 'No color',
      }
    },
  },
})