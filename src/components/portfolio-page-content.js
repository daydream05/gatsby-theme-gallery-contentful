import React from 'react'
import PropTypes from 'prop-types'

import PortfolioPageContainer from './portfolio-page-container';

import PortfolioPageHeader from './portfolio-page-header'
import PortfolioPagedMedia from "./portfolio-page-media";


const PortfolioPageContent = ({ data }) => {
  const { title, media, category, description } = data.contentfulPortfolio
  return (
    <article>
      <PortfolioPageContainer>
        <PortfolioPageHeader
          title={title}
          category={category}
          description={description && description.internal.content}
        />
        <PortfolioPagedMedia media={media} />
      </PortfolioPageContainer>
    </article>
  );
}

PortfolioPageContent.propTypes = {
  // specify later
  data: PropTypes.object
};

export default PortfolioPageContent
