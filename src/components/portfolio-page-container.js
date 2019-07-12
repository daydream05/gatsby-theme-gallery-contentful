import React from 'react'
import { css } from 'theme-ui'

import theme from '../gatsby-plugin-theme-ui'

const PortfolioPageContainer = (props) => {
  return (
    <div
      css={css({
        boxSizing: `border-box`,
        width: `100%`,
        backgroundColor: `white`,
        margin: `auto`,
        maxWidth: theme.breakpoints.xl,
        py: 4,
        px: [3,3,4]
      })}
      {...props}
    >
      {props.children}
    </div>
  );
}

export default PortfolioPageContainer