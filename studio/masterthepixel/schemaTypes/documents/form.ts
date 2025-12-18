import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'form',
  type: 'document',
  title: 'Form',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fields',
      type: 'array',
      title: 'Fields',
      of: [
        {
          type: 'object',
          name: 'field',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Name',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'inputType',
              type: 'string',
              title: 'Input Type',
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Email', value: 'email' },
                  { title: 'Textarea', value: 'textarea' },
                ],
              },
              initialValue: 'text',
            }),
            defineField({
              name: 'placeholder',
              type: 'string',
              title: 'Placeholder',
            }),
            defineField({
              name: 'isRequired',
              type: 'boolean',
              title: 'Required',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'name',
              type: 'inputType',
            },
            prepare({ title, type }) {
              return {
                title,
                subtitle: type,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'submitButtonText',
      type: 'string',
      title: 'Submit Button Text',
      initialValue: 'Submit',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})