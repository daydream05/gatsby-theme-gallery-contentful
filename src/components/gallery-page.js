import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { css, Styled } from 'theme-ui'

import Masonry from './masonry'
import Layout from './layout'

const GalleryPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <div
        css={css({
          pt: [4],
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
              <Link
                key={node.id}
                className="grid-item"
                to={node.fields.path}
                css={css({
                  textDecoration: `none`,
                  ":hover, :focus": {
                    ".card": {
                      transition: `0.3s opacity`,
                      visibility: `visible`,
                      opacity: 1
                    }
                  }
                })}
              >
                <div
                  css={css({
                    position: `relative`,
                    overflow: `hidden`
                  })}
                >
                  <Img
                    fluid={node.media.fluid}
                    alt={node.title}
                    css={css({
                      width: `100%`
                    })}
                  />
                  <div
                    className="card"
                    css={css({
                      transition: `0.3s opacity`,
                      visibility: `hidden`,
                      opacity: 0,
                      px: [3, 3, 4],
                      py: [4],
                      height: `100%`,
                      position: `absolute`,
                      top: 0,
                      backgroundColor: `rgba(255, 255, 255, 0.85)`
                    })}
                  >
                    {node.category && (
                      <span
                        css={css({
                          display: `block`,
                          textTransform: `uppercase`,
                          letterSpacing: 1,
                          fontFamily: `body`,
                          color: `black`,
                          opacity: 0.8,
                          fontSize: [0],
                          mb: [2, 2, 3]
                        })}
                      >
                        {node.category}
                      </span>
                    )}
                    <Styled.h5
                      css={css({
                        display: `block`,
                        textTransform: `uppercase`,
                        letterSpacing: 1,
                        fontFamily: `heading`,
                        fontWeight: `bold`,
                        color: `black`,
                        opacity: 0.8,
                        fontSize: [2],
                        mb: 2
                      })}
                    >
                      {node.title}
                    </Styled.h5>
                    <Styled.p
                      css={css({
                        color: `black`,
                        fontFamily: `body`,
                        lineHeight: 1.8,
                        fontSize: [1]
                      })}
                    >
                      We are 10 sparkling minds exploring human
                      communication via digital assets...
                    </Styled.p>
                  </div>
                </div>
              </Link>
            );
          })}
        </Masonry>
      </div>
    </Layout>
  )
}

export default GalleryPage
