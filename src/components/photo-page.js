import React from 'react'
import Img from 'gatsby-image'
import { css } from 'theme-ui'

import theme from '../gatsby-plugin-theme-ui'

import Layout from './layout'
import PhotoPageTitle from './photo-page-title'
import PhotoPageCategory from "./photo-page-category";
import PhotoPageContainer from './photo-page-container';


const PhotoPage = ({ data, location }) => {
  const { title, media } = data.contentfulPhoto

  let isModal = false
  // we can pass in a removeModal state to a Link
  // as an escape hatch.
  const removeModal = location.state && location.state.removeModal

  if (
    typeof window !== `undefined` &&
    // from gatsby browser
    window.___GATSBYGRAM_INITIAL_RENDER_COMPLETE &&
    // from location state
    !removeModal
  ) {
    isModal = true
  }

  return (
    <Layout location={location} isModal={isModal}>
      <PhotoPageContainer
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
          <Img
            fluid={media.fluid}
            alt={media.title}
            css={css({
              width: `100%`
            })}
          />
        </div>
      </PhotoPageContainer>
    </Layout>
  );
}

export default PhotoPage
