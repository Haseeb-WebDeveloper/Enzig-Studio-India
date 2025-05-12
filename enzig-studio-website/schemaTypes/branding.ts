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
                    }),
                    defineField({
                        name: "showOnPortfolio",
                        title: "Show On Portfolio",
                        type: "boolean",
                        initialValue: false,
                    })
                ]
            }]
        }),
        defineField({
            name: 'testimonials',
            title: 'Testimonials',
            type: 'reference',
            to: [{ type: 'testimonials' }]
        }),
    ],
});
