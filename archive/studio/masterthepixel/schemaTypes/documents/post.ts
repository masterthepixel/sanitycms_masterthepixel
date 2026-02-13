import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
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
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'H6', value: 'h6' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        { type: 'singleImageObject' },
        { type: 'videoObject' },
        { type: 'callToActionObject' },
      ],
    }),
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'postCategory' }],
    }),
    defineField({
      name: 'relatedPostsType',
      type: 'string',
      title: 'Related Posts Type',
      options: {
        list: [
          { title: 'Autofill', value: 'autofill' },
          { title: 'Manual', value: 'manual' },
        ],
      },
      initialValue: 'autofill',
    }),
    defineField({
      name: 'seo',
      type: 'seoObject',
      title: 'SEO',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image',
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: author,
        media,
      }
    },
  },
})