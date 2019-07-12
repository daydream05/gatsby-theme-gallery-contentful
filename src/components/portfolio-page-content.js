import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { css } from 'theme-ui'

import PortfolioPageTitle from './portfolio-page-title'
import PortfolioPageCategory from "./portfolio-page-category";
import PortfolioPageContainer from './portfolio-page-container';


const PhotoPageContent = ({ data, className }) => {
  const { title, media } = data.contentfulPhoto
  return (
    <PortfolioPageContainer className={className}>
      <PortfolioPageCategory>Animation</PortfolioPageCategory>
      <PortfolioPageTitle>{title}</PortfolioPageTitle>
      <div
        css={css({
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          backgroundColor: `grey.light`
        })}
      >
        {media && (
          <Img
            fluid={media.fluid}
            alt={media.title}
            css={css({
              width: `100%`
            })}
          />
        )}
      </div>
    </PortfolioPageContainer>
  );
}

PhotoPageContent.propTypes = {
  // specify later
  data: PropTypes.object,
}

export default PhotoPageContent
