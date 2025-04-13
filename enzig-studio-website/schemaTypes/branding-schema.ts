import {defineField, defineType} from 'sanity'

export const brandingSchema = defineType({
  name: 'branding',
  title: 'Branding',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Brand Title', 
      type: 'string'
    }),
    defineField({
      name: 'images',
      title: 'Brand Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        },
        fields: [
          defineField({
            name: 'categories',
            title: 'Image Categories',
            type: 'array',
            of: [{
              type: 'string',
              options: {
                list: ['Web & App Development', 'Digital Art & Illustration', '3D Modeling & Animation', 'Social Media Management', 'Branding & Marketing']
              }
            }]
          })
        ]
      }]
    }),
    defineField({
      name: 'showAtLanding',
      title: 'Show at Landing Page',
      type: 'boolean',
      initialValue: false
    })
  ]
})