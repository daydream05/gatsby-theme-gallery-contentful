import React from 'react'
import { Styled, css } from 'theme-ui'

const PortfolioPageTitle = (props) => {
  return (
    <Styled.h1
      css={css({
        fontSize: [4,4,4,5],
        mb: 3,
        ":first-letter": {
          textTransform: `capitalize`
        }
      })}
      {...props}
    >
      {props.children}
    </Styled.h1>
  )
}

export default PortfolioPageTitle