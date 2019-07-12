import React from 'react'
import PropTypes from 'prop-types'
import ReactMasonry from 'react-masonry-component'
import { css } from 'theme-ui'

import theme from '../gatsby-plugin-theme-ui'

const masonryOptions = {
  itemSelector: ".grid-item",
  gutter: 16,
  fitWidth: true,
};

const Masonry = (props) => {
  return (
    <ReactMasonry
      options={masonryOptions}
      css={css({
        mx: `auto`,
        my: 0,
        ".grid-item": {
          marginBottom: [3],
          width: [
            `calc(100vw - ${theme.space[4]}px)`,
            `calc(100vw - ${theme.space[4]}px)`,
            `30vw`,
            `30vw`,
            `20vw`
          ]
        }
      })}
      {...props}
    >
      {props.children}
    </ReactMasonry>
  );
}

Masonry.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Masonry
