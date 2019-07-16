import React from 'react'
import PropTypes from 'prop-types'
import { css } from "theme-ui";

import theme from '../gatsby-plugin-theme-ui'

import GalleryPageTitle from './gallery-page-title'
import GalleryPageSubtitle from './gallery-page-subtitle'

const GalleryPageHeader = (props) => {
  const { title, subTitle, ...rest } = props
  return (
    <header
      css={css({
        mx: [2, 2, 3, 4, 4, `auto`],
        maxWidth: [
          `unset`,
          `unset`,
          `unset`,
          `unset`,
          `unset`,
          theme.breakpoints.xl
        ]
      })}
      {...rest}
    >
      <GalleryPageTitle>{title}</GalleryPageTitle>
      <GalleryPageSubtitle>{subTitle}</GalleryPageSubtitle>
    </header>
  );
}

GalleryPageHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default GalleryPageHeader