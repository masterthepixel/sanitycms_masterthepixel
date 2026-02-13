import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'generalSettings',
  type: 'document',
  title: 'General Settings',
  fields: [
    defineField({
      name: 'siteTitle',
      type: 'string',
      title: 'Site Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'homePage',
      type: 'reference',
      title: 'Home Page',
      to: [{ type: 'page' }],
    }),
    defineField({
      name: 'companyEmailAddress',
      type: 'email',
      title: 'Company Email Address',
    }),
    defineField({
      name: 'companyPhoneNumber',
      type: 'string',
      title: 'Company Phone Number',
    }),
    defineField({
      name: 'copyright',
      type: 'string',
      title: 'Copyright Text',
    }),
    defineField({
      name: 'companySocialMediaLinks',
      type: 'array',
      title: 'Social Media Links',
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
              name: 'profileUrl',
              type: 'url',
              title: 'Profile URL',
            }),
            defineField({
              name: 'icon',
              type: 'image',
              title: 'Icon',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'General Settings',
      }
    },
  },
})