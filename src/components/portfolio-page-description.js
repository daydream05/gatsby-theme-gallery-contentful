import React from 'react'
import { Styled, css } from 'theme-ui'

const PortfolioPageDescription = (props) => {
  return (
    <Styled.p
      css={css({
        fontFamily: 'body',
        color: `black`,
        width: [`100%`,`100%`,`50%`],
        mb: [4],
      })}
      {...props}
    >
      {props.children}
    </Styled.p>
  )
}

export default PortfolioPageDescription