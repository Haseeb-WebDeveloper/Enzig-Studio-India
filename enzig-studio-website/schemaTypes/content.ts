import { defineField, defineType } from 'sanity'

export const content = defineType({
    name: 'content',
    title: 'Content',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'firstSectionImage',
            type: 'array',
            title: '1st section images',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'secondSectionImage',
            type: 'array',
            title: '2nd section images',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'carouselImage',
            type: 'array',
            title: 'Carousel Image',
            of: [{ type: 'image' }],
            description: 'Carousel Images',
        }),
        defineField({
            name: 'fourthSectionImage',
            type: 'image',
            title: '4th section single image',
        }),
        defineField({
            name: 'fifthSectionImage',
            type: 'array',
            title: '5th section images',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'sixthSectionImage',
            type: 'array',
            title: '6th section images',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'testimonials',
            title: 'Testimonials',
            type: 'reference',
            to: [{ type: 'testimonials' }]
        }),
    ],
})