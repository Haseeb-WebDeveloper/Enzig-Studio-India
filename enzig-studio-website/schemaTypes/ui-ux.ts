import {defineField, defineType} from 'sanity'

export const uiUx = defineType({
  name: 'ui-ux',
  title: 'UI/UX',
  type: 'document',
  fields: [
   defineField({
    name: 'title',
    type: 'string',
    title: 'Title'
   }),
   defineField({
    name: 'carouselCards',
    type: 'array', 
    title: 'Carousel Cards',
    of: [{
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image'
        }),
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title'
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Description'
        })
      ]
    }],
    description: 'Carousel card images with title and description',
   }),
   defineField({
    name: 'secondSectionImage',
    type: 'array',
    title: 'Second Section Image',
    of: [{type: 'image'}],
   }),
   defineField({
    name: 'testimonials',
    title: 'Testimonials',
    type: 'reference',
    to: [{ type: 'testimonials' }]
  }), 
  ],
})