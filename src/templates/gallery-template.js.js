import React from 'react'
import { css, Styled } from 'theme-ui'

const Gallery = () => {
  return (
    <div
      css={css({
        pt: [4],
      })}
    >
      <Styled.h1
        css={css({
          color: `accent`,
          textAlign: `center`,
        })}
      >Gallery</Styled.h1>
    </div>
  )
}

export default Gallery