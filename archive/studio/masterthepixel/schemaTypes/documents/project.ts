import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
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
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      rows: 3,
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'altText',
          type: 'string',
          title: 'Alt Text',
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Caption',
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
    }),
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'projectCategory' }],
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
        { type: 'callToActionBlock' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      media: 'image',
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: category,
        media,
      }
    },
  },
})