import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonialBlock',
  type: 'object',
  title: 'Testimonial Block',
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'anchorId',
      type: 'string',
      title: 'Anchor ID',
    }),
    defineField({
      name: 'cornerRadiusTop',
      type: 'string',
      title: 'Top Corner Radius',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Rounded', value: 'rounded' },
          { title: 'Straight', value: 'straight' },
        ],
      },
      initialValue: 'straight',
    }),
    defineField({
      name: 'cornerRadiusBottom',
      type: 'string',
      title: 'Bottom Corner Radius',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Rounded', value: 'rounded' },
          { title: 'Straight', value: 'straight' },
        ],
      },
      initialValue: 'rounded',
    }),
    defineField({
      name: 'testimonials',
      type: 'array',
      title: 'Testimonials',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `Testimonials: ${title}`,
      }
    },
  },
})