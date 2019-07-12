import React from 'react'
import { css } from 'theme-ui'

import theme from '../gatsby-plugin-theme-ui'

const PhotoPageContainer = (props) => {
  return (
    <div
      css={css({
        width: `100%`,
        backgroundColor: `white`,
        margin: `auto`,
        maxWidth: theme.breakpoints.xl,
        py: 4,
        px: 4
      })}
      {...props}
    >
      {props.children}
    </div>
  );
}

export default PhotoPageContainer