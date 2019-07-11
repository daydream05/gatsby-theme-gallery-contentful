import React, { useState, useEffect } from 'react'
import { navigate, useStaticQuery, graphql } from 'gatsby'
import findIndex from "lodash/findIndex"
import mousetrap from "mousetrap"

import "@reach/dialog/styles.css"

import RightArrow from './right-arrow'
import LeftArrow from './left-arrow';
import CloseButton from './close-button'
import DialogOverlay from './dialog-overlay'
import DialogContent from './dialog-content'

const Modal = (props) => {
  const { isOpen, location, children } = props

  const [showDialog, setShowDialog] = useState(isOpen)
  const data = useStaticQuery(photoQuery)
  const photos = data.contentfulGallery.media
  
  useEffect(() => {
    mousetrap.bind(`left`, next)
    mousetrap.bind(`right`, previous)
    mousetrap.bind(`space`, next)
    mousetrap.bind(`escape`, dismiss)

    return () => {
      mousetrap.unbind(`left`)
      mousetrap.unbind(`right`)
      mousetrap.unbind(`space`)
      mousetrap.unbind(`escape`)
    }
  }, [`left`, `right`, `space`, `escape`])

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

  const dismiss = () => {
    setShowDialog(false);
    navigate(data.site.siteMetadata.basePath);
  }

  return (
    <DialogOverlay
      isOpen={showDialog}
      onDismiss={dismiss}
    >
      <DialogContent>
        <CloseButton onClick={dismiss} />
        <LeftArrow onClick={next} />
        {children}
        <RightArrow onClick={next} />
      </DialogContent>
    </DialogOverlay>
  );
}

const photoQuery = graphql`
  query {
    site {
      siteMetadata {
        basePath
      }
    }
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