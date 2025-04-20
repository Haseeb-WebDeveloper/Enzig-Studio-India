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
    role,
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
    description,
    publishedAt,
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

// leading post query
export const leadingPostQuery = `
*[_type == "post" && category->title == "Leading"][0]{
  _id,
  title,
  slug,
  description,
  mainImage,
  publishedAt,
  "author": author->{
    name,
    image
  },
  "category": category->{
    title,
    description
  }
}
`

// posts by category with pagination
export const postsByCategoryQuery = `
*[_type == "post" && ($category == "all" || category->title == $category)] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  slug,
  description,
  mainImage,
  publishedAt,
  "author": author->{
    name,
    image
  },
  "category": category->{
    title,
    description
  }
}
`

// total posts count by category
export const totalPostsByCategoryQuery = `
count(*[_type == "post" && ($category == "all" || category->title == $category)])
`



// blog sidebar image
export const blogSidebarImageQuery = `
*[_type == "blogSidebarImage"][0]{
  "imageUrl": image.asset._ref
}
`

// blog cta image
export const blogCtaImageQuery = `
*[_type == "blogCtaImage"][0]{
  "imageUrl": image.asset._ref
}
`






// case studies
// posts by category with pagination
export const caseStudiesByCategoryQuery = `
*[_type == "caseStudies" && ($category == "all" || category->title == $category)] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  slug,
  description,
  mainImage,
  publishedAt,
  "author": author->{
    name,
    image
  },
  "category": category->{
    title,
  }
}
`

// total posts count by category
export const totalCaseStudiesByCategoryQuery = `
count(*[_type == "caseStudies" && ($category == "all" || category->title == $category)])
`


export const featuredCaseStudiesQuery = `
*[_type == "caseStudies" && category->title == "Featured"][0]{
  _id,
  title,
  slug,
  description,
  mainImage,
  publishedAt,
  "author": author->{
    name,
    image
  },
  "category": category->{
    title,
  }
}
`

export const allCaseStudiesCategoryQuery = `
*[_type == "caseStudiesCategory"]{
  _id,
  title,
}
`



// single case study
export const singleCaseStudyQuery = `
*[_type == "caseStudies" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  mainImage,
  firstDescription,
  secondDescription,
  logo,
  stats,
  publishedAt,
  updatedAt,
  content,
  "author": author->{
    name,
    image,
    role,
    bio
  },
  "category": category->{
    title,
  },
  "faq": faq[]->{
    question,
    answer
  },
  "relatedPosts": relatedPosts[]->{
    _id,
    title,
    description,
    publishedAt,
    slug,
    mainImage
  }
}
`