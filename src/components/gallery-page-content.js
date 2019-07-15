import React from "react"
import PropTypes from 'prop-types'
import { css } from "theme-ui"

import GalleryPageHeading from "./gallery-page-heading";
import GalleryPageMasonry from './gallery-page-masonry'

const GalleryPageContent = ({ data, isBehindAModal }) => {
  return (
    <div
      css={css({
        pt: [4]
      })}
    >
      <GalleryPageHeading title={data.site.siteMetadata.baseTitle} />
      <GalleryPageMasonry data={data} isBehindAModal={isBehindAModal} />
    </div>
  );
}

GalleryPageContent.propTypes = {
  data: PropTypes.object.isRequired,
  isBehindAModal: PropTypes.bool,
}

export default GalleryPageContent;
