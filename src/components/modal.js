import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { DialogOverlay, DialogContent } from "@reach/dialog"
import { css } from 'theme-ui'

import theme from '../gatsby-plugin-theme-ui'

import "@reach/dialog/styles.css"

const Modal = (props) => {
  const { isOpen, location, children } = props

  console.log(`shouldBeOpen: ${isOpen}`)

  const [showDialog, setShowDialog] = useState(isOpen)
  console.log(`showDialog: ${showDialog}`)

  return (
    <DialogOverlay
      isOpen={showDialog}
      onDismiss={() => {
        setShowDialog(false);
        navigate(`/gallery/`);
      }}
      css={css({
        zIndex: `modal`,
        background: "hsla(0, 100%, 100%, 0.5)",
        m: 0
      })}
    >
      <DialogContent
      >
        {children}
      </DialogContent>
    </DialogOverlay>
  );
}

export default Modal