import { defineField, defineType } from 'sanity'

export const singleProjects = defineType({
    name: 'single-projects',
    title: 'Single Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug'
        }),
        defineField({
            name: 'logo',
            type: 'image',
            title: 'Logo'
        }),
        defineField({
            name: 'rightSideImage',
            type: 'image',
            title: 'Right Side Image'
        }),
        defineField({
            name: 'secondSectionHeading',
            type: 'string',
            title: 'Second Section Heading'
        }),
        defineField({
            name: 'secondSectionDescription',
            type: 'text',
            title: 'Second Section Description'
        }),
        defineField({
            name: 'secondSectionImage',
            type: 'image',
            title: 'Second Section Image'
        }),
        defineField({
            name: 'projectOverviewDescription',
            type: 'text',
            title: 'Project Overview Description'
        }),
        defineField({
            name: 'projectGoals',
            type: 'array',
            title: 'Project Goals',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'goal',
                            type: 'string',
                            title: 'Project Goal'
                        },
                        {
                            name: 'icon',
                            type: 'image',
                            title: 'Project Goal Icon'
                        }
                    ]
                }
            ]
        }),
        defineField({
            name: 'projectImages',
            type: 'array',
            title: 'Project Images',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Project Image'
                        },
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Project Image Title'
                        }
                    ]
                }
            ]
        }),
        defineField({
            name: 'testimonials',
            title: 'Testimonials',
            type: 'reference',
            to: [{ type: 'testimonials' }]
        }),
    ]
})