import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'navigationSettings',
  type: 'document',
  title: 'Navigation Settings',
  fields: [
    defineField({
      name: 'navbarMenuItems',
      type: 'array',
      title: 'Navbar Menu Items',
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
              name: 'menuItemType',
              type: 'string',
              title: 'Type',
              options: {
                list: [
                  { title: 'Single', value: 'single' },
                  { title: 'Group', value: 'group' },
                ],
              },
              initialValue: 'single',
            }),
            defineField({
              name: 'pageReference',
              type: 'reference',
              title: 'Page Reference',
              to: [{ type: 'page' }],
            }),
            defineField({
              name: 'pageReferences',
              type: 'array',
              title: 'Page References',
              of: [{ type: 'reference', to: [{ type: 'page' }] }],
              hidden: ({ parent }) => parent?.menuItemType !== 'group',
            }),
            defineField({
              name: 'isButton',
              type: 'boolean',
              title: 'Is Button',
              initialValue: false,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'footerColumns',
      type: 'array',
      title: 'Footer Columns',
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
              name: 'menuItems',
              type: 'array',
              title: 'Menu Items',
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
                      name: 'linkType',
                      type: 'string',
                      title: 'Link Type',
                      options: {
                        list: [
                          { title: 'Internal', value: 'internal' },
                          { title: 'External', value: 'external' },
                        ],
                      },
                      initialValue: 'internal',
                    }),
                    defineField({
                      name: 'pageReference',
                      type: 'reference',
                      title: 'Page Reference',
                      to: [{ type: 'page' }],
                      hidden: ({ parent }) => parent?.linkType !== 'internal',
                    }),
                    defineField({
                      name: 'externalUrl',
                      type: 'url',
                      title: 'External URL',
                      hidden: ({ parent }) => parent?.linkType !== 'external',
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'footerLegalMenuItems',
      type: 'array',
      title: 'Footer Legal Menu Items',
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
              name: 'pageReference',
              type: 'reference',
              title: 'Page Reference',
              to: [{ type: 'page' }],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'showSlideOutMenu',
      type: 'boolean',
      title: 'Show Slide Out Menu',
      initialValue: true,
    }),
    defineField({
      name: 'showCompanyDetailsSlideOutMenu',
      type: 'boolean',
      title: 'Show Company Details in Slide Out Menu',
      initialValue: true,
    }),
    defineField({
      name: 'slideOutMenuItems',
      type: 'array',
      title: 'Slide Out Menu Items',
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
              name: 'menuItemType',
              type: 'string',
              title: 'Type',
              options: {
                list: [
                  { title: 'Single', value: 'single' },
                  { title: 'Group', value: 'group' },
                ],
              },
              initialValue: 'single',
            }),
            defineField({
              name: 'pageReference',
              type: 'reference',
              title: 'Page Reference',
              to: [{ type: 'page' }],
            }),
            defineField({
              name: 'pageReferences',
              type: 'array',
              title: 'Page References',
              of: [{ type: 'reference', to: [{ type: 'page' }] }],
              hidden: ({ parent }) => parent?.menuItemType !== 'group',
            }),
            defineField({
              name: 'isButton',
              type: 'boolean',
              title: 'Is Button',
              initialValue: false,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'slideOutMenuButtons',
      type: 'array',
      title: 'Slide Out Menu Buttons',
      of: [{ type: 'buttonObject' }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation Settings',
      }
    },
  },
})