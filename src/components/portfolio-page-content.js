import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'theme-ui'

import PortfolioPageTitle from './portfolio-page-title'
import PortfolioPageCategory from "./portfolio-page-category";
import PortfolioPageContainer from './portfolio-page-container';

import PortfolioPagedMedia from "./portfolio-page-media";
import PortfolioPageDescription from './portfolio-page-description';


const PortfolioPageContent = ({ data, className }) => {
  const { title, media, category, description } = data.contentfulPortfolio
  console.log(data.contentfulPortfolio);
  return (
    <PortfolioPageContainer className={className}>
        <PortfolioPageCategory>{category}</PortfolioPageCategory>
        <PortfolioPageTitle>{title}</PortfolioPageTitle>
        {description && (
          <PortfolioPageDescription>
            {description.internal.content}
          </PortfolioPageDescription>
        )}
      <PortfolioPagedMedia media={media} />
    </PortfolioPageContainer>
  );
}

PortfolioPageContent.propTypes = {
  // specify later
  data: PropTypes.object
};

export default PortfolioPageContent
