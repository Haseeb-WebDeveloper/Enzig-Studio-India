import {defineField, defineType} from 'sanity'

export const secondSectionLogo = defineType({
  name: '2nd-section-logo',
  title: '2nd Section Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'logo',
              type: 'image',
              title: 'Logo Image'
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text'
            }
          ]
        }
      ],
      // validation: (Rule) => Rule.length(10).error('Must have exactly 10 logos')
    })
  ],
})