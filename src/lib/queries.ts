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

