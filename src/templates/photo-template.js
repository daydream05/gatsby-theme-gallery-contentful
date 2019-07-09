import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Styled } from 'theme-ui'

const PhotoTemplate = ({ data }) => {
  const { title, media } = data.contentfulPhoto

  return (
    <div>
      <Styled.h1>{title}</Styled.h1>
      <Img fluid={media.fluid} alt={media.title} />
    </div>
  )
}

export const photoTemplateQuery = graphql`
  query($slug: String!) {
    contentfulPhoto(fields: { slug: { eq: $slug }}) {
      title
      media {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      fields {
        slug
      }
    }
  }
`

export default PhotoTemplate