import { defineType, defineField } from "sanity";

export const brandingPortfolio = defineType({
    name: "brandingPortfolio",
    title: "Branding Portfolio",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "brands",
            title: "Brands",
            type: "array",
            of: [{
                type: "object",
                fields: [
                    defineField({
                        name: "brandName",
                        title: "Brand Name",
                        type: "string",
                    }),
                    defineField({
                        name: "logo",
                        title: "Logo",
                        type: "image",
                    }),
                    defineField({
                        name: "fontName",
                        title: "Font Name",
                        type: "string",
                    }),
                    defineField({
                        name: "brandColors",
                        title: "Brand Colors",
                        type: "array",
                        of: [{ type: "string" }],
                    }),
                    defineField({
                        name: "clientImage",
                        title: "Client Image",
                        type: "image",
                    }),
                    defineField({
                        name: "feedback",
                        title: "Client Feedback",
                        type: "text",
                    }),
                    defineField({
                        name: "brandImages",
                        title: "Brand Images",
                        type: "array",
                        of: [{ type: "image" }],
                    })
                ]
            }]
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
});
