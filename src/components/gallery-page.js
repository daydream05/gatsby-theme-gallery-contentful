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
            color: `black`,
            textAlign: `center`,
            mb: [4],
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
                      display: `flex`,
                      flexDirection: `column`,
                      boxSizing: `border-box`,
                      transition: `0.3s`,
                      visibility: `hidden`,
                      opacity: 0,
                      px: [3, 3, 4],
                      py: [4],
                      height: `100%`,
                      position: `absolute`,
                      top: 0,
                      backgroundColor: `black`,
                      width: `100%`,
                      height: `100%`
                    })}
                  >
                    {node.category && (
                      <span
                        css={css({
                          display: `block`,
                          textTransform: `uppercase`,
                          letterSpacing: 1,
                          fontFamily: `body`,
                          color: `white`,
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
                        color: `white`,
                        fontSize: [2],
                        mb: 4
                      })}
                    >
                      {node.title}
                    </Styled.h5>
                    <Styled.p
                      css={css({
                        color: `white`,
                        fontFamily: `body`,
                        lineHeight: 1.8,
                        fontSize: [2],
                        letterSpacing: 1,
                        flex: 1,
                        overflow: `hidden`,
                        textOverflow: `ellipsis`
                      })}
                    >
                      We are 10 sparkling minds exploring human
                      communication via digital assets...
                    </Styled.p>
                    <button
                      css={css({
                        border: `2px solid white`,
                        backgroundColor: `unset`,
                        color: `white`,
                        cursor: `pointer`,
                        fontSize: [1],
                        textTransform: `uppercase`,
                        py: 3,
                        px: 3,
                        letterSpacing: 2,
                        display: `flex`,
                        justifyContent: `space-between`,
                        alignItems: `center`,
                        alignSelf: `flex-start`,
                        transition: `0.3s`,
                        ":hover, :focus": {
                          backgroundColor: `white`,
                          transition: `0.3s`,
                          color: `black`
                        }
                      })}
                    >
                      Learn more
                    </button>
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
