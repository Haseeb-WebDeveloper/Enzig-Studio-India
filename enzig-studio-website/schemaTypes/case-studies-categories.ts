import {defineType, defineField} from 'sanity'

export const caseStudiesCategory = defineType({
  name: 'caseStudiesCategory',
  title: 'Case Studies Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
  ]
})
