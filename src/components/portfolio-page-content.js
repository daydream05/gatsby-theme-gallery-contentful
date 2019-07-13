import React from 'react'
import PropTypes from 'prop-types'

import PortfolioPageTitle from './portfolio-page-title'
import PortfolioPageCategory from "./portfolio-page-category";
import PortfolioPageContainer from './portfolio-page-container';

import PortfolioPagedMedia from "./portfolio-page-media";


const PhotoPageContent = ({ data, className }) => {
  const { title, media, category } = data.contentfulPortfolio
  console.log(data.contentfulPortfolio);
  return (
    <PortfolioPageContainer className={className}>
      <PortfolioPageCategory>{category}</PortfolioPageCategory>
      <PortfolioPageTitle>{title}</PortfolioPageTitle>
      <PortfolioPagedMedia media={media} />
    </PortfolioPageContainer>
  );
}

PhotoPageContent.propTypes = {
  // specify later
  data: PropTypes.object,
}

export default PhotoPageContent
