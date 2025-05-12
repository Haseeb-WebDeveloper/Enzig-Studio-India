import { defineField, defineType } from 'sanity'

export const socialMedia = defineType({
  name: 'social-media',
  title: 'Social Media',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'topImage',
      type: 'array',
      title: 'Top 3 Image',
      of: [{ type: 'image' }],
      description: 'Image is required and maximum 3 images allowed',
      validation: (Rule) => Rule.required().max(3).error('Image is required and maximum 3 images allowed')
    }),
    defineField({
      name: 'bottomImage',
      type: 'array',
      title: 'Bottom 2 Image',
      of: [{ type: 'image' }],
      description: 'Image is required and maximum 2 images allowed',
      validation: (Rule) => Rule.required().max(2).error('Image is required and maximum 2 images allowed')
    }),
    defineField({
      name: 'carouselImage',
      type: 'array',
      title: 'Carousel Image',
      of: [{ type: 'image' }],
      description: 'Carousel Images',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'reference',
      to: [{ type: 'testimonials' }]
    }),
  ],
})