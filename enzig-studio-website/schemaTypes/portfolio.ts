import {defineField, defineType} from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
   defineField({
    name: 'title',
    type: 'string',
    title: 'Title'
   }),
   defineField({
    name: 'homeRightSideImage',
    type: 'image',
    title: 'Home Right Side Image'
   }),
   defineField({
    name: 'contentCreationImages',
    type: 'array',
    title: 'Content Creation Images',
    of: [{type: 'image'}]
   }),
   defineField({
    name: 'logos',
    type: 'array',
    title: 'Logos',
    of: [{type: 'image'}]
   }),
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
  ],
})