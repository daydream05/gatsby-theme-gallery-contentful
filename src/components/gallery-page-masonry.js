import React from 'react'
import PropTypes from 'prop-types'
import ReactMasonry from 'react-masonry-component'
import { css } from 'theme-ui'

import PortfolioCard from "./portfolio-card"

import theme from '../gatsby-plugin-theme-ui'

const masonryOptions = {
  itemSelector: ".grid-item",
  columnWidth: `.grid-sizer`,
  gutter: 16,
};

const GalleryPageMasonry = ({ data, isBehindAModal, ...rest }) => {
  return (
    <ReactMasonry
      options={masonryOptions}
      css={css({
        my: 0,
        width: `100%`,
        ".grid-sizer": {
          width: [
            `calc(99.99% * 1/1 - ${theme.space[3]}px)`,
            `calc(99.99% * 1/1 - ${theme.space[3]}px)`,
            `calc(99.99% * 1/1 - ${theme.space[3]}px)`,
            `calc(99.99% * 1/3 - ${theme.space[3]}px)`,
            `calc(99.99% * 1/3 - ${theme.space[3]}px)`,
            `calc(99.99% * 1/3 - ${theme.space[3]}px)`,
            `calc(99.99% * 1/5 - ${theme.space[3]}px)`
          ]
        },
        ".grid-item": {
          marginBottom: [3, 4, 3],
          mx: [2, 2, 2],
          width: [
            `calc(99.99% * 1/1 - ${theme.space[3]}px)`,
            `calc(99.99% * 1/1 - ${theme.space[3]}px)`,
            `calc(99.99% * 1/1 - ${theme.space[3]}px)`,
            `calc(99.99% * 1/3 - ${theme.space[3]}px)`,
            `calc(99.99% * 1/3 - ${theme.space[3]}px)`,
            `calc(99.99% * 1/3 - ${theme.space[3]}px)`,
            `calc(99.99% * 1/5 - ${theme.space[3]}px)`
          ]
        }
      })}
      {...rest}
    >
      <div className="grid-sizer" />
      {data.allContentfulPortfolio.edges.map(({ node }, index) => {
        return (
          <PortfolioCard
            isBehindAModal={isBehindAModal}
            key={`${node.id}-${index}`}
            className={`grid-item`}
            title={node.title}
            media={node.media}
            category={node.category}
            linkTo={node.fields.path}
            description={
              node.description && node.description.internal.content
            }
          />
        );
      })}
    </ReactMasonry>
  );
};

GalleryPageMasonry.propTypes = {
  data: PropTypes.object.isRequired,
  isBehindAModal: PropTypes.bool
};

export default GalleryPageMasonry
