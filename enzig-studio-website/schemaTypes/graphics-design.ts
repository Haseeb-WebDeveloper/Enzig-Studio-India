import { defineField, defineType } from 'sanity'

export const graphicsDesign = defineType({
  name: 'graphics-design',
  title: 'Graphics Design',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'homeImages',
      type: 'array',
      title: 'Home Images',
      of: [{ type: 'image' }]
    }),
    defineField({
      name: 'image',
      type: 'array',
      title: 'Image',
      of: [{ type: 'image' }]
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'reference',
      to: [{ type: 'testimonials' }]
    }),
  ],
})