import React from 'react'
import PropTypes from 'prop-types'

import PortfolioPageContainer from './portfolio-page-container';

import PortfolioPageHeader from './portfolio-page-header'
import PortfolioPagedMedia from "./portfolio-page-media";


const PortfolioPageContent = ({ data }) => {
  const { title, media, category, description } = data.contentfulPortfolio
  return (
    <PortfolioPageContainer>
      <PortfolioPageHeader
        title={title}
        category={category}
        description={description}
      />
      <PortfolioPagedMedia media={media} />
    </PortfolioPageContainer>
  );
}

PortfolioPageContent.propTypes = {
  // specify later
  data: PropTypes.object
};

export default PortfolioPageContent
