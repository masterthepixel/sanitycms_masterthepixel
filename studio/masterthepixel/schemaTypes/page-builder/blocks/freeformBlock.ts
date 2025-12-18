import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'freeformBlock',
  type: 'object',
  title: 'Freeform Block',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'anchorId',
      type: 'string',
      title: 'Anchor ID',
    }),
    defineField({
      name: 'border',
      type: 'string',
      title: 'Border',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Top', value: 'top' },
          { title: 'Bottom', value: 'bottom' },
          { title: 'Both', value: 'both' },
        ],
      },
      initialValue: 'none',
    }),
    defineField({
      name: 'columns',
      type: 'array',
      title: 'Columns',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
            }),
            defineField({
              name: 'alignment',
              type: 'string',
              title: 'Alignment',
              options: {
                list: [
                  { title: 'Left', value: 'left' },
                  { title: 'Center', value: 'center' },
                  { title: 'Right', value: 'right' },
                ],
              },
              initialValue: 'left',
            }),
            defineField({
              name: 'spacing',
              type: 'string',
              title: 'Spacing',
              options: {
                list: [
                  { title: 'None', value: 'none' },
                  { title: 'Small', value: 'small' },
                  { title: 'Medium', value: 'medium' },
                  { title: 'Large', value: 'large' },
                ],
              },
              initialValue: 'none',
            }),
            defineField({
              name: 'items',
              type: 'array',
              title: 'Items',
              of: [
                { type: 'singleImageObject' },
                { type: 'spacerObject' },
                { type: 'headingObject' },
                { type: 'richTextObject' },
                { type: 'buttonObject' },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'columnsPerRow',
      type: 'string',
      title: 'Columns Per Row',
      options: {
        list: [
          { title: '1', value: '1' },
          { title: '2', value: '2' },
          { title: '3', value: '3' },
          { title: '4', value: '4' },
        ],
      },
      initialValue: '2',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title ? `Freeform: ${title}` : 'Freeform Block',
      }
    },
  },
})