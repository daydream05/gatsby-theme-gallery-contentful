import { graphql } from 'gatsby'
import PortfolioPage from '../components/portfolio-page'

export default PortfolioPage

export const portfolioTemplateQuery = graphql`
  query($slug: String!) {
    contentfulPhoto(fields: { slug: { eq: $slug }}) {
      title
      media {
        fluid {
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