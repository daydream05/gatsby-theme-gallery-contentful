import React from 'react'
import { graphql, Link } from 'gatsby'
import { css, Styled } from 'theme-ui'

const Gallery = ({ data }) => {
  console.log(data)

  return (
    <div
      css={css({
        pt: [4],
      })}
    >
      <Styled.h1
        css={css({
          color: `accent`,
          textAlign: `center`,
        })}
      >Gallery</Styled.h1>
      {data.allContentfulPhoto.edges.map(({ node }) => {
        return (
          <Link
            key={node.id}
            to={node.fields.path}
          >{node.title}</Link>
        )
      })}
    </div>
  )
}

export const galleryQuery = graphql`
  query {
    allContentfulPhoto {
      edges {
        node {
          id
          title
          fields {
            path
          }
        }
      }
    }
  }
`

export default Gallery