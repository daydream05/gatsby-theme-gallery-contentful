import React from 'react'
import Img from 'gatsby-image'
import { Styled } from 'theme-ui'

const PhotoPage = ({ data }) => {
  const { title, media } = data.contentfulPhoto
  return (
    <div>
      <Styled.h1>{title}</Styled.h1>
      <Img fluid={media.fluid} alt={media.title} />
    </div>
  )
}

export default PhotoPage
