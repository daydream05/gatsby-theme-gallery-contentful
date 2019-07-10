import React from 'react'
import { graphql } from 'gatsby'

import GalleryPage from '../components/gallery-page'

export default GalleryPage

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