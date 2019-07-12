import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { css } from 'theme-ui'

import PortfolioPageTitle from './portfolio-page-title'
import PortfolioPageCategory from "./portfolio-page-category";
import PortfolioPageContainer from './portfolio-page-container';

import PortfolioCardMedia from './portfolio-card-media'


const PhotoPageContent = ({ data, className }) => {
  const { title, media } = data.contentfulPortfolio
  return (
    <PortfolioPageContainer className={className}>
      <PortfolioPageCategory>Animation</PortfolioPageCategory>
      <PortfolioPageTitle>{title}</PortfolioPageTitle>
      <PortfolioCardMedia media={media} />
    </PortfolioPageContainer>
  );
}

PhotoPageContent.propTypes = {
  // specify later
  data: PropTypes.object,
}

export default PhotoPageContent
