import React from 'react'
import PropTypes from 'prop-types'
import ReactMasonry from 'react-masonry-component'
import { css } from 'theme-ui'

import PortfolioCard from "./portfolio-card"

import theme from '../gatsby-plugin-theme-ui'

const masonryOptions = {
  itemSelector: ".grid-item",
  gutter: 16,
  fitWidth: true,
};

const GalleryPageMasonry = ({ data, isBehindAModal, ...rest }) => {
  return (
    <ReactMasonry
      options={masonryOptions}
      css={css({
        mx: `auto`,
        maxWidth: theme.breakpoints.xl,
        my: 0,
        ".grid-item": {
          marginBottom: [3, 4, 3],
          width: [
            `calc(100vw - ${theme.space[4]}px)`,
            `calc(100vw - ${theme.space[4]}px)`,
            `45vw`,
            `30vw`,
            `20vw`
          ]
        }
      })}
      {...rest}
    >
      {data.allContentfulPortfolio.edges.map(({ node }, index) => {
        return (
          <PortfolioCard
            isBehindAModal={isBehindAModal}
            key={`${node.id}-${index}`}
            className="grid-item"
            title={node.title}
            media={node.media}
            category={node.category}
            linkTo={node.fields.path}
            description={node.description && node.description.internal.content}
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
