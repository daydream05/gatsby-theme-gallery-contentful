import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
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
  const portfolioList = data.allContentfulPortfolio.edges.map(e => e.node)
  
  useEffect(() => {
    mousetrap.bind(`left`, next)
    mousetrap.bind(`right`, previous)
    mousetrap.bind(`escape`, dismiss)

    return () => {
      mousetrap.unbind(`left`)
      mousetrap.unbind(`right`)
      mousetrap.unbind(`escape`)
    }
  }, [`left`, `right`, `space`, `escape`])

  const findCurrentIndex = () => {
    let index
    index = findIndex(
      portfolioList,
      (portfolio) => portfolio.fields.path === location.pathname
    )

    return index
  }

  const next = (e) => {
    if(e) {
      e.stopPropagation()
    }
    const currentIndex = findCurrentIndex()
    if( currentIndex || currentIndex === 0) {
      let nextItem
      // wrap around if at end
      if (currentIndex + 1 === portfolioList.length) {
        nextItem = portfolioList[0]
      } else {
        nextItem = portfolioList[currentIndex + 1]
      }
      navigate(`${nextItem.fields.path}`);
    }
  }

  const previous = (e) => {
    if(e) {
      e.stopPropagation()
    }

    const currentIndex = findCurrentIndex()
    if (currentIndex || currentIndex === 0) {
      let prevItem
      // wrap around if at start
      if (currentIndex === 0) {
        prevItem = portfolioList.slice(-1)[0];
      } else {
        prevItem = portfolioList[currentIndex - 1]
      }
      navigate(`${prevItem.fields.path}`);
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

Modal.propTypes = {
  isOpen: PropTypes.bool,
  location: PropTypes.object.isRequired,
  children: PropTypes.node,
}

const photoQuery = graphql`
  query {
    site {
      siteMetadata {
        basePath
      }
    }
    allContentfulPortfolio {
      edges {
        node {
          fields {
            path
          }
        }
      }
    }
  }
`

export default Modal