import React from 'react'
import Img from 'gatsby-image'
import { Styled, css } from 'theme-ui'

import Layout from './layout'
import theme from '../gatsby-plugin-theme-ui';

const PhotoPage = ({ data, location }) => {
  const { title, media } = data.contentfulPhoto

  let isModal = false

  if (
    typeof window !== `undefined` &&
    // from gatsby browser
    window.___GATSBYGRAM_INITIAL_RENDER_COMPLETE
  ) {
    isModal = true
  }

  console.log(isModal)

  return (
    <Layout location={location} isModal={isModal}>
      <div
        css={css({
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          height: `100vh`,
          width: `100%`,
          overflowY: `hidden`,
          marginTop: isModal ? 0 : `-${theme.headerHeight}`,
        })}
      >
        <Img
          fixed={media.fixed}
          alt={media.title}
          css={css({
            width: `100%`,
          })}
        />
      </div>
    </Layout>
  );
}

export default PhotoPage
