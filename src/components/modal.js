import React, { useState, useEffect } from 'react'
import { navigate, useStaticQuery, graphql } from 'gatsby'
import { DialogOverlay, DialogContent } from "@reach/dialog"
import { css } from 'theme-ui'
import findIndex from "lodash/findIndex"
import mousetrap from "mousetrap"

import theme from '../gatsby-plugin-theme-ui'

import "@reach/dialog/styles.css"

const Modal = (props) => {
  const { isOpen, location, children } = props

  const [showDialog, setShowDialog] = useState(isOpen)
  const data = useStaticQuery(photoQuery)
  const photos = data.contentfulGallery.media
  
  useEffect(() => {
    mousetrap.bind(`left`, next)
    mousetrap.bind(`right`, previous)
    mousetrap.bind(`space`, next)

    return () => {
      mousetrap.unbind(`left`)
      mousetrap.unbind(`right`)
      mousetrap.unbind(`space`)
    }
  }, [`left`, `right`, `space`])

  const findCurrentIndex = () => {
    let index
    index = findIndex(
      photos,
      photo => photo.fields.path === location.pathname
    )

    return index
  }

  const next = (e) => {
    if(e) {
      e.stopPropagation()
    }
    const currentIndex = findCurrentIndex()
    if( currentIndex || currentIndex === 0) {
      let nextPhoto
      // wrap around if at end
      if (currentIndex + 1 === photos.length) {
        nextPhoto = photos[0]
      } else {
        nextPhoto = photos[currentIndex + 1]
      }
      navigate(`${nextPhoto.fields.path}`);
    }
  }

  const previous = (e) => {
    if(e) {
      e.stopPropagation()
    }

    const currentIndex = findCurrentIndex()
    if (currentIndex || currentIndex === 0) {
      let previousPhoto
      // wrap around if at start
      if (currentIndex === 0) {
        previousPhoto = photos.slice(-1)[0];
      } else {
        previousPhoto = photos[currentIndex - 1]
      }
      navigate(`${previousPhoto.fields.path}`);
    }
  }

  return (
    <DialogOverlay
      isOpen={showDialog}
      onDismiss={() => {
        setShowDialog(false);
        navigate(`/gallery/`);
      }}
      css={css({
        zIndex: `modal`,
        background: "hsla(0, 0%, 0%, .75)",
        m: 0
      })}
    >
      <DialogContent
        css={css({
          mt: [0],
          width: `50vw`,
          height: `100vh`,
          maxWidth: `50vw`,
          p: 0,
          background: `unset`,
          position: `absolute`,
          mx: `auto`,
          left: 0,
          right: 0,
          top: 0,
        })}
      >
        {children}
      </DialogContent>
    </DialogOverlay>
  );
}

const photoQuery = graphql`
  query {
    contentfulGallery {
      media {
        ... on ContentfulPhoto {
          fields {
            path
          }
        }
      }
    }
  }
`

export default Modal