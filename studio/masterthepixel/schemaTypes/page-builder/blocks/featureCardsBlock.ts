import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'featureCardsBlock',
  type: 'object',
  title: 'Feature Cards Block',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'showCallToAction',
      type: 'boolean',
      title: 'Show Call to Action',
      initialValue: true,
    }),
    defineField({
      name: 'callToActionHeading',
      type: 'string',
      title: 'Call to Action Heading',
      hidden: ({ parent }) => !parent?.showCallToAction,
    }),
    defineField({
      name: 'callToActionContent',
      type: 'array',
      title: 'Call to Action Content',
      of: [{ type: 'block' }],
      hidden: ({ parent }) => !parent?.showCallToAction,
    }),
    defineField({
      name: 'callToActionButtons',
      type: 'array',
      title: 'Call to Action Buttons',
      of: [{ type: 'buttonObject' }],
      hidden: ({ parent }) => !parent?.showCallToAction,
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
              validation: (rule) => rule.required(),
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
              name: 'items',
              type: 'array',
              title: 'Items',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'button',
              type: 'buttonObject',
              title: 'Button',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'buttons',
      type: 'array',
      title: 'Buttons',
      of: [{ type: 'buttonObject' }],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `Feature Cards: ${title}`,
      }
    },
  },
})