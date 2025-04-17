import {defineField, defineType} from 'sanity'

export const blogSidebarImageSchema = defineType({
  name: 'blogSidebarImage',
  title: 'Blog Sidebar Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
});

