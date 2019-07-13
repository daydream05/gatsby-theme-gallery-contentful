import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import ReactPlayer from 'react-player'
import { css } from 'theme-ui'
import { Waypoint } from 'react-waypoint'

import theme from '../gatsby-plugin-theme-ui'


const PortfolioCardMedia = (props) => {
  const { media } = props

  const [playVideo, setPlayVideo] = useState(false)

  if (media.file.contentType === "video/mp4") {
    return (
      <Waypoint
        onEnter={() => setPlayVideo(true)}
        onLeave={() => setPlayVideo(false)}
      >
        <div>
          <div
            css={css({
              display: "none",
              [theme.mediaQueries.lg]: {
                display: `block`
              }
            })}
          >
            <ReactPlayer
              url={media.file.url}
              muted
              loop
              playing={playVideo}
              width="100%"
              height="auto"
            />
          </div>
          <div
            css={css({
              display: `block`,
              [theme.mediaQueries.lg]: {
                display: `none`
              }
            })}
          >
            <ReactPlayer
              url={media.file.url}
              width="100%"
              height="auto"
            />
          </div>
        </div>
      </Waypoint>
    );
  }
  
  return (
    <div>
      {media && (
        <Img
          fluid={media.fluid}
          alt={media.title}
          css={css({
            width: `100%`
          })}
        />
      )}
    </div>
  )
}

PortfolioCardMedia.propTypes = {
  media: PropTypes.object.isRequired,
}
export default PortfolioCardMedia