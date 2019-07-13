import React from 'react'
import { graphql } from 'gatsby'

import GalleryPage from '../components/gallery-page'

export default GalleryPage

export const galleryQuery = graphql`
  query {
    allContentfulPortfolio {
      edges {
        node {
          id
          title
          category
          description {
            internal {
              content
            }
          }
          media {
            file {
              contentType
              url
            }
            fluid(maxWidth: 3000) {
              ...GatsbyContentfulFluid_tracedSVG
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