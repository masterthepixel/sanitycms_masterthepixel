import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'formBlock',
  type: 'object',
  title: 'Form Block',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'form',
      type: 'reference',
      title: 'Form',
      to: [{ type: 'form' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'anchorId',
      type: 'string',
      title: 'Anchor ID',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      form: 'form.title',
    },
    prepare({ title, form }) {
      return {
        title: `Form: ${title}`,
        subtitle: form,
      }
    },
  },
})