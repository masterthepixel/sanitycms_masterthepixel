import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'buttonObject',
  type: 'object',
  title: 'Button',
  fields: [
    defineField({
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'buttonType',
      type: 'string',
      title: 'Button Type',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
          { title: 'Email Address', value: 'emailAddress' },
          { title: 'Anchor', value: 'anchor' },
          { title: 'File Download', value: 'fileDownload' },
        ],
      },
      initialValue: 'internal',
    }),
    defineField({
      name: 'buttonPageReference',
      type: 'reference',
      title: 'Page Reference',
      to: [{ type: 'page' }],
      hidden: ({ parent }) => !['internal', 'fileDownload'].includes(parent?.buttonType),
    }),
    defineField({
      name: 'buttonExternalUrl',
      type: 'url',
      title: 'External URL',
      hidden: ({ parent }) => parent?.buttonType !== 'external',
    }),
    defineField({
      name: 'buttonEmailAddress',
      type: 'email',
      title: 'Email Address',
      hidden: ({ parent }) => parent?.buttonType !== 'emailAddress',
    }),
    defineField({
      name: 'buttonAnchorId',
      type: 'string',
      title: 'Anchor ID',
      hidden: ({ parent }) => parent?.buttonType !== 'anchor',
    }),
    defineField({
      name: 'buttonAnchorLocation',
      type: 'string',
      title: 'Anchor Location',
      options: {
        list: [
          { title: 'Current Page', value: 'currentPage' },
          { title: 'Different Page', value: 'differentPage' },
        ],
      },
      initialValue: 'currentPage',
      hidden: ({ parent }) => parent?.buttonType !== 'anchor',
    }),
    defineField({
      name: 'buttonFileUrl',
      type: 'file',
      title: 'File',
      hidden: ({ parent }) => parent?.buttonType !== 'fileDownload',
    }),
    defineField({
      name: 'buttonVariant',
      type: 'string',
      title: 'Button Variant',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Tertiary', value: 'tertiary' },
          { title: 'Outline', value: 'outline' },
        ],
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'buttonWidth',
      type: 'string',
      title: 'Button Width',
      options: {
        list: [
          { title: 'Auto', value: 'auto' },
          { title: 'Full Width', value: 'fullWidth' },
        ],
      },
      initialValue: 'auto',
    }),
    defineField({
      name: 'showButton',
      type: 'boolean',
      title: 'Show Button',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'buttonText',
      type: 'buttonType',
    },
    prepare({ title, type }) {
      return {
        title,
        subtitle: type,
      }
    },
  },
})