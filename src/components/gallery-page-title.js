import React from 'react'
import { css, Styled } from "theme-ui"

const GalleryPageTitle = (props) => {
  const { children } = props
  return (
    <Styled.h1
      css={css({
        pl: 1,
        mt: 0,
        mb: [0],
        color: `text`,
        fontSize: [7, 7, 7, 8],
        lineHeight: `body`
      })}
      {...props}
    >
      {children}
    </Styled.h1>
  );
}

export default GalleryPageTitle