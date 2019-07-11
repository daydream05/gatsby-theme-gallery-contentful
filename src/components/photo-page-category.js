import React from 'react'
import { css } from 'theme-ui'

const PhotoPageCategory = (props) => {
  return (
    <span
      css={css({
        display: `block`,
        textTransform: `uppercase`,
        letterSpacing: 2,
        fontFamily: `body`,
        fontWeight: `bold`,
        color: `black`,
        opacity: 0.8,
        fontSize: `0.5rem`,
        mb: 4
      })}
      {...props}
    >{props.children}</span>
  );
}

export default PhotoPageCategory;