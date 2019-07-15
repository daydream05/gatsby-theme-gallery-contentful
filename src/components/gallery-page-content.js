import React from "react"
import PropTypes from 'prop-types'
import { css } from "theme-ui"

import GalleryPageHeading from "./gallery-page-heading";
import GalleryPageMasonry from './gallery-page-masonry'

const GalleryPageContent = ({ data, isBehindAModal }) => {
  const portfolioList = data.allContentfulPortfolio.edges.map(e => e.node);
  
  return (
    <div
      css={css({
        pt: [4]
      })}
    >
      <GalleryPageHeading title={data.site.siteMetadata.baseTitle} />
      <GalleryPageMasonry
        itemList={portfolioList}
        isBehindAModal={isBehindAModal}
      />
    </div>
  );
}

GalleryPageContent.propTypes = {
  data: PropTypes.object.isRequired,
  isBehindAModal: PropTypes.bool,
}

export default GalleryPageContent;
