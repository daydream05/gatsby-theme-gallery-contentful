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

  if(isModal) {
    return (
      <Layout location={location} isModal={isModal}>
        <div
          css={css({
            display: `inline-block`,
          })}
        >
          <Img
            fixed={media.fixed}
            alt={media.title}
            css={css({
              width: `100%`
            })}
          />
        </div>
      </Layout>
    )
  }

  return (
    <Layout location={location} isModal={isModal}>
      <div
        css={css({
          display: `flex`,
          flexDirection: `column`,
          px: [4],
          py: [4],
          [theme.mediaQueries.xl]: {
            maxWidth: theme.breakpoints.lg,
            margin: `auto`,
          }
        })}
      >
        <Styled.h1
          css={css({
            gridColumn: 2,
            fontSize: [3, 4, 5],
          })}
        >{title}</Styled.h1>
        <Img
          fluid={media.fluid}
          alt={media.title}
          css={css({
            width: `100%`,
            gridColumn: 1,
            gridRow: 1,
          })}
        />
      </div>
    </Layout>
  );
}

export default PhotoPage
