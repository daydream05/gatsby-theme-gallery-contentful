import React from 'react'
import { graphql } from 'gatsby'

import Gallery from '../components/gallery'

export default Gallery

export const galleryQuery = graphql`
  query {
    allContentfulPhoto {
      edges {
        node {
          id
          title
          media {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
            fixed {
              ...GatsbyContentfulFixed_withWebp
            }
          }
          fields {
            path
          }
        }
      }
    }
  }
`