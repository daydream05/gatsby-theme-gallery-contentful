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
      >
        <Styled.h1>{title}</Styled.h1>
        <Img fixed={media.fixed} alt={media.title} />
      </div>
    </Layout>
  );
}

export default PhotoPage
