// schemas/testimonialGroup.ts
import { defineType, defineField } from 'sanity'

export const testimonials = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'groupTitle',
      title: 'Group Title',
      type: 'string',
      description: 'For example: Testimonial for all pages.',
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Testimonial Text',
              type: 'text',
              validation: Rule => Rule.required()
            },
            {
              name: 'name',
              title: 'Client Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'category',
              title: 'Role/Position',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'image',
              title: 'Client Image',
              type: 'image',
              options: {
                hotspot: true
              },
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    }),
  ],
})
