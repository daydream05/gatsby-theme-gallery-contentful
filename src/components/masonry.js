import React from 'react'
import ReactMasonry from 'react-masonry-component'
import { css } from 'theme-ui'

const masonryOptions = {
  itemSelector: ".grid-item",
  gutter: 16,
  fitWidth: true,
};

const Masonry = (props) => {
  return (
    <ReactMasonry
      className={'grid'}
      options={masonryOptions}
      {...props}
      css={css({
        mx: `auto`,
        '.grid-item': {
          marginBottom: [3],
        }
      })}
    >
      {props.children}
    </ReactMasonry>
  );
}

export default Masonry
