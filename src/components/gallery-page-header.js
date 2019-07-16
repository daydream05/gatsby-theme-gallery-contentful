import React from 'react'
import PropTypes from 'prop-types'
import { css } from "theme-ui";

import GalleryPageTitle from './gallery-page-title'
import GalleryPageSubtitle from './gallery-page-subtitle'

const GalleryPageHeader = (props) => {
  const { title, subTitle } = props
  return (
    <header
      css={css({
        mx: [2, 2, 3, 4, 4, 6]
      })}
      {...props}
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