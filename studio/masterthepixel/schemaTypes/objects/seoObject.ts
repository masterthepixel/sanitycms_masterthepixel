import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seoObject',
  type: 'object',
  title: 'SEO',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
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
      name: 'noIndex',
      type: 'boolean',
      title: 'No Index',
      description: 'Prevent search engines from indexing this page',
      initialValue: false,
    }),
  ],
})