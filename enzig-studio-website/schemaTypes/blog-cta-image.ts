import {defineField, defineType} from 'sanity'

export const blogCtaImageSchema = defineType({
  name: 'blogCtaImage',
  title: 'Blog CTA Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
});

