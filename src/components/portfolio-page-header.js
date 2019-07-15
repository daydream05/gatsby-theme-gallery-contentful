import React from 'react'
import PropTypes from 'prop-types'

import { css } from 'theme-ui'

import theme from '../gatsby-plugin-theme-ui'

import PortfolioPageTitle from './portfolio-page-title'
import PortfolioPageCategory from "./portfolio-page-category";
import PortfolioPageContainer from './portfolio-page-container';

import PortfolioPagedMedia from "./portfolio-page-media";
import PortfolioPageDescription from './portfolio-page-description';

const PortfolioPageHeader = (props) => {
  const { title, category, description, ...rest } = props
  return (
    <header
      css={css({
        display: `block`,
        [theme.mediaQueries.md]: {
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`
        }
      })}
      {...rest}
    >
      <PortfolioPageCategory>{category}</PortfolioPageCategory>
      <PortfolioPageTitle
        css={css({
          gridColumn: 1
        })}
      >
        {title}
      </PortfolioPageTitle>
      {description && (
        <PortfolioPageDescription
          css={css({
            gridColumn: 1
          })}
        >
          {description.internal.content}
        </PortfolioPageDescription>
      )}
    </header>
  );
}

PortfolioPageHeader.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
}

export default PortfolioPageHeader