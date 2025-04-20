import {defineType, defineField} from 'sanity'

export const solutionLogoBranding = defineType({
  name: 'solutionLogoBranding', 
  title: 'Solution Logo Branding',
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
      of: [{type: 'image'}]
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
      of: [{type: 'string'}],
      validation: Rule => Rule.length(3)
    }),

    // Third section - Testimonials
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'text',
            title: 'Testimonial Text',
            type: 'text'
          }),
          defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
          }),
          defineField({
            name: 'category',
            title: 'Category',
            type: 'string'
          }),
          defineField({
            name: 'image',
            title: 'Image',
            type: 'image'
          })
        ]
      }]
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
      of: [{type: 'reference', to: {type: 'faq'}}]
    })
  ],
})
