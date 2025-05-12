import { defineType, defineField } from 'sanity'

export const solutionPackagingPrinting = defineType({
  name: 'solutionPackagingPrinting',
  title: 'Solution Packaging Printing',
  type: 'document',
  fields: [
    // Home section
    defineField({
      name: 'homeHeading',
      title: 'Home Page Heading',
      type: 'string',
    }),
    defineField({
      name: 'homePara',
      title: 'Home Page Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'trustedByLogos',
      title: 'Trusted By Logos',
      type: 'array',
      of: [{ type: 'image' }]
    }),
    defineField({
      name: 'homeImages',
      title: 'Home Page Images',
      type: 'image',
    }),

    // Second section
    defineField({
      name: 'secondSectionHeading',
      title: 'Second Section Heading',
      type: 'string'
    }),
    defineField({
      name: 'secondSectionImage',
      title: 'Second Section Image',
      type: 'image'
    }),
    defineField({
      name: 'secondSectionContent',
      title: 'Second Section Content',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.length(3)
    }),

    // Third section - Testimonials
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'reference',
      to: [{ type: 'testimonials' }]
    }),

    // Fourth section
    defineField({
      name: 'fourthSectionHeading',
      title: 'Fourth Section Heading',
      type: 'string'
    }),
    defineField({
      name: 'fourthSectionPara',
      title: 'Fourth Section Paragraph',
      type: 'text'
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
          }),
          defineField({
            name: 'para',
            title: 'Paragraph',
            type: 'text'
          }),
          defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image'
          })
        ]
      }]
    }),

    // Fifth section
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'faq' } }]
    })
  ],
})
