import React from 'react'
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
      className={"grid"}
      options={masonryOptions}
      {...props}
      css={css({
        mx: `auto`,
        my: 0,
        ".grid-item": {
          marginBottom: [3],
          width: [
            `calc(100vw - ${theme.space[4]}px)`,
            `calc(100vw - ${theme.space[4]}px)`,
            `20vw`,
          ]
        }
      })}
    >
      {props.children}
    </ReactMasonry>
  );
}

export default Masonry
