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
      <GalleryPageSubtitle>
        There are no previous versions because you haven't made changes to
        this entry yet. As soon as you publish changes, you'll be able to
        compare different versions.
      </GalleryPageSubtitle>
    </header>
  );
}

GalleryPageHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default GalleryPageHeader