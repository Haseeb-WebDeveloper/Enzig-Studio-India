import { defineType, defineField } from "sanity";

export const team = defineType({
    name: "team",
    title: "Team",
    type: "document",
    fields: [
        defineField({
            name: "heroSectionPara",
            title: "Hero Section Paragraph",
            type: "string",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: "teamMembers",
            title: "Team Members",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "name",
                            title: "Name",
                            type: "string",
                            validation: Rule => Rule.required()
                        },
                        {
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true
                            },
                            validation: Rule => Rule.required()
                        },
                        {
                            name: "bio",
                            title: "Bio",
                            type: "text",
                            validation: Rule => Rule.required()
                        },
                        {
                            name: "favouriteTools",
                            title: "Favourite Tools",
                            type: "array",
                            of: [
                                {
                                    type: "string"
                                }
                            ],
                            validation: Rule => Rule.required()
                        }
                    ]
                }
            ]
        })
    ]
});