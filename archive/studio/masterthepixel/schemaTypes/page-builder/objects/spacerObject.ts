import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'spacerObject',
  type: 'object',
  title: 'Spacer',
  fields: [
    defineField({
      name: 'height',
      type: 'string',
      title: 'Height',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
          { title: 'Extra Large', value: 'extraLarge' },
        ],
      },
      initialValue: 'medium',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Spacer',
      }
    },
  },
})