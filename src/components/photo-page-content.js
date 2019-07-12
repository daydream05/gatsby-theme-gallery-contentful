import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { css } from 'theme-ui'

import PhotoPageTitle from './photo-page-title'
import PhotoPageCategory from "./photo-page-category";
import PhotoPageContainer from './photo-page-container';


const PhotoPageContent = ({ data, className }) => {
  const { title, media } = data.contentfulPhoto
  return (
    <PhotoPageContainer
      className={className}
    >
      <PhotoPageCategory>Animation</PhotoPageCategory>
      <PhotoPageTitle>{title}</PhotoPageTitle>
      <div
        css={css({
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          backgroundColor: `grey.light`
        })}
      >
        {media &&
          <Img
            fluid={media.fluid}
            alt={media.title}
            css={css({
              width: `100%`
            })}
          />
        }
      </div>
    </PhotoPageContainer>
  );
}

PhotoPageContent.propTypes = {
  // specify later
  data: PropTypes.object,
}

export default PhotoPageContent
