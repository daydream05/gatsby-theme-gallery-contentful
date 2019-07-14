import React from 'react'
import { css } from 'theme-ui'

import theme from "../gatsby-plugin-theme-ui"

const PortfolioCardTextOverlay = (props) => {
  return (
    <div
      css={css({
        display: `none`,
        [theme.mediaQueries.md]: {
          display: `block`,
          position: `absolute`,
          top: 0,
          transform: `translateY(-100%)`,
          width: `100%`,
          height: `100%`,
          background: `linear-gradient(
            180deg,
            rgba(29, 29, 29, 0) 3%,
            rgb(29, 29, 29) 100%
          )`
        }
      })}
      {...props}
    />
  )
}

export default PortfolioCardTextOverlay
