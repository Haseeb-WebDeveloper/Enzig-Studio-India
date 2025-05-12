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
*[_type == "post" && showInBlogPage == true][0]{
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



// solution stratergy analysis
export const solutionStratergyAnalysisQuery = `
*[_type == "solutionStratergyAnalysis"][0]{
  homeHeading,
  homePara,
  trustedByLogos[]{
    asset->{
      _id,
      url
    }
  },
  homeImages{
    asset->{
      _id,
      url
    }
  },
  secondSectionHeading,
  secondSectionImage{
    asset->{
      _id,
      url
    }
  },
  secondSectionContent,
  "testimonials": testimonials->testimonials[],
  fourthSectionHeading,
  fourthSectionPara,
  services[]{
    title,
    para,
    icon{
      asset->{
        _id,
        url
      }
    }
  },
  faq[]->{
    _id,
    question,
    answer
  }
}
`







export const solutionPageQuery = (pageName: string) => `
*[_type == "${pageName}"][0]{
  homeHeading,
  homePara,
  trustedByLogos[]{
    asset->{
      _id,
      url
    }
  },
  homeImages{
    asset->{
      _id,
      url
    }
  },
  secondSectionHeading,
  secondSectionImage{
    asset->{
      _id,
      url
    }
  },
  secondSectionContent,
  "testimonials": testimonials->testimonials[],
  fourthSectionHeading,
  fourthSectionPara,
  services[]{
    title,
    para,
    icon{
      asset->{
        _id,
        url
      }
    }
  },
  faq[]->{
    _id,
    question,
    answer
  }
}
`


export const threeDProjectsQuery = () => `
*[_type == "3d-projects"][0] {
  title,
  video {
    asset->{
      url
    }
  },
  image[] {
    asset->{
      url,
    }
  },
    "testimonials": testimonials->testimonials[],
}
`


export const graphicsDesignQuery = () => `
*[_type == "graphics-design"][0] {
  title,
  homeImages[] {
    asset->{
      url,
    }
  },
  image[] {
    asset->{
      url,
    }
  },
    "testimonials": testimonials->testimonials[],
}
`


export const socialMediaQuery = () => `
*[_type == "social-media"][0] {
  title,
  topImage[] {
    asset->{
      url
    }
  },
  bottomImage[] {
    asset->{
      url
    }
  },
  carouselImage[] {
    asset->{
      url
    }
  },
     "testimonials": testimonials->testimonials[],
}
`;


export const contentQuery = () => `
*[_type == "content"][0] {
  title,
  firstSectionImage[] {
    asset->{
      url
    }
  },
  secondSectionImage[] {
    asset->{
      url
    }
  },
  carouselImage[] {
    asset->{
      url
    }
  },
  fourthSectionImage {
    asset->{
      url
    }
  },
  fifthSectionImage[] {
    asset->{
      url
    }
  },
  sixthSectionImage[] {
    asset->{
      url
    }
  },
    "testimonials": testimonials->testimonials[],
}
`;


export const uiUxQuery = () => {
  return `
*[_type == "ui-ux"][0]{
  title,
  carouselCards[]{
    image{
      asset->{
        url
      }
    },
    title,
    description
  },
  secondSectionImage[]{
    asset->{
      url
    }
  },
    "testimonials": testimonials->testimonials[],
}
  `
}



export const brandingPortfolioQuery = () => {
  return `
*[_type == "brandingPortfolio"][0]{
  title,
  brands[]{
    brandName,
    fontName,
    brandColors,
    feedback,
    logo{
      asset->{
        url
      }
    },
    clientImage{
      asset->{
        url
      }
    },
    brandImages[]{
      asset->{
        url
      }
    }
  },
    "testimonials": testimonials->testimonials[],
}
`
}




export const portfolioQuery = () => {
  return `
*[_type == "portfolio"][0]{
  title,
  homeRightSideImage{
    asset->{
      url
    }
  },
  logos[]{
    asset->{
      url
    }
  },
    "testimonials": testimonials->testimonials[],
  "brands": *[_type == "brandingPortfolio"][0].brands[showOnPortfolio == true]{
    brandName,
    fontName,
    feedback,
    logo{
      asset->{
        url
      }
    },
    clientImage{
      asset->{
        url
      }
    },
    brandImages[]{
      asset->{
        url
      }
    }
  },
  contentCreationImages[]{
    asset->{
      url
    }
  },
  "socialMediaTopImages": *[_type == "social-media"][0].topImage[]{
    asset->{
      url
    }
  },
  "graphicsDesignImages": *[_type == "graphics-design"][0].homeImages[]{
    asset->{
      url
    }
  },
  "uiUxImages": *[_type == "ui-ux"][0].carouselCards[]{
   image{
      asset->{
        url
      }
    },
    title,
    description
  },
  "threeDProjectVideo": *[_type == "3d-projects"][0]{
    video{
      asset->{
        url
      }
    }
  }
}
`
}

// singleProjectsQuery.ts
export const singleProjectsQuery = `
*[_type == "single-projects" && slug.current == $slug][0]{
  title,
  description,
  "slug": slug.current,
  "logo": logo.asset->url,
  "rightSideImage": rightSideImage.asset->url,
  secondSectionHeading,
  secondSectionDescription,
  "secondSectionImage": secondSectionImage.asset->url,
  projectGoals[] {
    goal,
    "icon": icon.asset->url
  },
  projectImages[] {
    "image": image.asset->url,
    title
  },
    "testimonials": testimonials->testimonials[],
  projectOverviewDescription,
  projectOverviewImage{
    asset->{
      url
    }
  }
}
`;

