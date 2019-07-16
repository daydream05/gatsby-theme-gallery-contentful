import React from 'react'
import PropTypes from 'prop-types'
import { css, Styled } from "theme-ui";

import theme from "../gatsby-plugin-theme-ui"

const GalleryPageHeading = (props) => {
  const { title } = props
  return (
    <Styled.h1
      css={css({
        mx: [2,2,3,4,4,6],
        pl: 1,
        mb: [4, 4, 4],
        color: `text`,
        fontSize: [7,7,7,8],
        [theme.mediaQueries.xxxl]: {
          maxWidth: theme.breakpoints.xxxl,
          mb: 5,
          mx: `auto`,
        }
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