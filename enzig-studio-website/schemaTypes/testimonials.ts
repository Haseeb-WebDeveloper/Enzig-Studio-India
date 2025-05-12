// schemas/testimonialGroup.ts
import { defineType, defineField } from 'sanity'

export const testimonials = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'groupTitle',
      title: 'Group Title / Slug',
      type: 'string',
      description: 'For example: solution-strategy-analysis',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'reference',
      to: [{ type: 'testimonials' }]
    }),
  ],
})
