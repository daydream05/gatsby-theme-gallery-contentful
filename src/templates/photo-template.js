import { graphql } from 'gatsby'
import PhotoPage from '../components/photo-page'

export default PhotoPage

export const photoTemplateQuery = graphql`
  query($slug: String!) {
    contentfulPhoto(fields: { slug: { eq: $slug }}) {
      title
      media {
        fluid(maxHeight: 300) {
          ...GatsbyContentfulFluid_withWebp
        }
        fixed(height: 600) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      fields {
        slug
      }
    }
  }
`;