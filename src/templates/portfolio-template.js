import { graphql } from 'gatsby'
import PortfolioPage from '../components/portfolio-page'

export default PortfolioPage

export const portfolioTemplateQuery = graphql`
  query($slug: String!) {
    contentfulPortfolio(fields: { slug: { eq: $slug }}) {
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