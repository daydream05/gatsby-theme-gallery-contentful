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