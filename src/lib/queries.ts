export const secondSectionLogoQuery = `
*[_type == "2nd-section-logo"]{
  logos[]{
    logo{
      asset->{
        url
      }
    },
    alt
  }
}
`

export const brandForLandingQuery = `
  *[_type == "branding" && showAtLanding == true]{
    title,
    images[]{
      asset->{
        url
      },
      categories
    },
    showAtLanding
  }
`


// Post Queries

// all posts
export const allPostsQuery = `
*[_type == "post"]{
  _id,
  title,
  slug,
  description,
  mainImage,
  publishedAt,
  updatedAt,
  content,
  "author": author->{
    name,
    image,
    bio
  },
  "category": category->{
    title,
    description
  },
  "faq": faq[]->{
    question,
    answer
  },
  "relatedPosts": relatedPosts[]->{
    _id,
    title,
    slug,
    mainImage
  }
} | order(publishedAt desc)
`


// paginated posts
export const paginatedPostsQuery = `
*[_type == "post"] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  slug,
  mainImage,
  description,
  publishedAt
}
`


// single post
export const singlePostQuery = `
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  mainImage,
  publishedAt,
  updatedAt,
  content,
  "author": author->{
    name,
    image,
    bio
  },
  "category": category->{
    title,
    description
  },
  "faq": faq[]->{
    question,
    answer
  },
  "relatedPosts": relatedPosts[]->{
    _id,
    title,
    slug,
    mainImage
  }
}
`


// all authors
export const allAuthorsQuery = `
*[_type == "author"]{
  _id,
  name,
  image,
  bio
}
`

// categories
export const allCategoriesQuery = `
*[_type == "category"]{
  _id,
  title,
  description
}
`

// faq
export const allFaqQuery = `
*[_type == "faq"]{
  _id,
  question,
  answer
}
`

