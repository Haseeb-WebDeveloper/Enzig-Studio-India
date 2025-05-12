import { defineType } from "sanity";

export default defineType({
  name: "imageWithLink",
  title: "Image with Link",
  type: "object",
  fields: [
    { 
      name: "image", 
      title: "Image",
      type: "image" 
    },
    { 
      name: "imageLink", 
      title: "Image Link",
      type: "string",
      description: "The URL that the image will link to"
    },
    { 
      name: "textLink", 
      title: "Text Link",
      type: "string",
      description: "The is the link for the description text"
    },
    {
      name: "text",
      title: "Description",
      type: "string",
      description: "The text that will the description of the image"
    }
  ],
});
