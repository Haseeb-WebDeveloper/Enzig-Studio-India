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