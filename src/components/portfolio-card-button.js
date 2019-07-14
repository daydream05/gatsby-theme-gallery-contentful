import React from 'react'
import { css } from 'theme-ui'

import theme from "../gatsby-plugin-theme-ui"


const PortfolioCardButton = (props) => {
  return (
    <button
      css={css({
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        alignSelf: `flex-start`,
        backgroundColor: `unset`,
        color: `black`,
        fontSize: [1],
        textTransform: `uppercase`,
        py: 3,
        px: 3,
        letterSpacing: 2,
        border: `2px solid`,
        cursor: `pointer`,
        transition: `0.3s`,
        ":hover, :focus": {
          backgroundColor: `white`,
          transition: `0.3s`,
          color: `black`
        },
        [theme.mediaQueries.md]: {
          color: `white`,
          border: `2px solid white`,
          backgroundColor: `unset`,
          ":hover, :focus": {
            color: `black`,
            backgroundColor: `white`
          }
        },
        variant: "buttons.secondary"
      })}
    >
      {props.children}
    </button>
  );
}

export default PortfolioCardButton