import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { css, Styled } from 'theme-ui'

import Masonry from './masonry'

const Gallery = ({ data }) => {
  return (
    <div
      css={css({
        pt: [4]
      })}
    >
      <Styled.h1
        css={css({
          color: `accent`,
          textAlign: `center`
        })}
      >
        Gallery
      </Styled.h1>
      <Masonry>
        {data.allContentfulPhoto.edges.map(({ node }) => {
          return (
            <Link key={node.id} className="grid-item" to={node.fields.path}>
              <Img fixed={node.media.fixed} alt={node.title} />
            </Link>
          )
        })}
      </Masonry>
    </div>
  )
}

export default Gallery
