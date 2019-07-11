import React from 'react'
import { Styled, css } from 'theme-ui'

const PhotoPageTitle = (props) => {
  return (
    <Styled.h1
      css={css({
        fontSize: 3,
        mb: 4,
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

export default PhotoPageTitle