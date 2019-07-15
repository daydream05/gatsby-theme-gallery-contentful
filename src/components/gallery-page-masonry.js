import React from 'react'
import PropTypes from 'prop-types'
import ReactMasonry from 'react-masonry-component'
import { css } from 'theme-ui'

import PortfolioCard from "./portfolio-card"

import theme from '../gatsby-plugin-theme-ui'

const gridItemWidth = [
  `calc(99.99% * 1/1 - ${theme.space[3]}px)`,
  `calc(99.99% * 1/1 - ${theme.space[3]}px)`,
  `calc(99.99% * 1/1 - ${theme.space[3]}px)`,
  `calc(99.99% * 1/3 - ${theme.space[3]}px)`,
  `calc(99.99% * 1/3 - ${theme.space[3]}px)`,
  `calc(99.99% * 1/4 - ${theme.space[3]}px)`,
  `calc(99.99% * 1/5 - ${theme.space[3]}px)`,
  `calc(99.99% * 1/6 - ${theme.space[3]}px)`
]

const GalleryPageMasonry = ({ data, isBehindAModal, gutter, ...rest }) => {

  const masonryOptions = {
    itemSelector: ".grid-item",
    columnWidth: `.grid-sizer`,
    gutter: theme.space[3],
  }

  return (
    <div
      css={css({
        mx: [2, 2, 3, 3, 3],
        variant: `masonry.gridContainer`,
      })}
    >
      <ReactMasonry
        options={{
          ...masonryOptions,
          gutter
        }}
        css={css({
          my: 0,
          width: `100%`,
          ".grid-sizer": {
            width: gridItemWidth,
            variant: `masonry.gridSizer`,
          },
          ".grid-item": {
            marginBottom: [5, 5, 5, 3],
            mx: [2, 2, 2],
            width: gridItemWidth,
            variant: `masonry.gridItem`,
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
    </div>
  );
};

GalleryPageMasonry.propTypes = {
  data: PropTypes.object.isRequired,
  isBehindAModal: PropTypes.bool,
  gutter: PropTypes.number,
};

GalleryPageMasonry.defaultProps = {
  gutter: theme.space[3],
}

export default GalleryPageMasonry
