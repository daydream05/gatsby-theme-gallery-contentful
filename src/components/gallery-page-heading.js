import React from 'react'
import PropTypes from 'prop-types'
import { css, Styled } from "theme-ui";

import theme from "../gatsby-plugin-theme-ui"

const GalleryPageHeading = (props) => {
  const { title } = props
  return (
    <Styled.h1
      css={css({
        maxWidth: theme.breakpoints.xl,
        px: 3,
        mb: [4, 4, 4],
        mx: `auto`,
        color: `black`,
        textAlign: [`left`, `left`, `center`],
        fontSize: [6]
      })}
    >
      {title}
    </Styled.h1>
  );
}

GalleryPageHeading.propTypes = {
  title: PropTypes.string,
}

export default GalleryPageHeading