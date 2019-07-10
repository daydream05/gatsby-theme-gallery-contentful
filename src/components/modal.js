import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { DialogOverlay, DialogContent } from "@reach/dialog"
import { css } from 'theme-ui'

import theme from '../gatsby-plugin-theme-ui'

import "@reach/dialog/styles.css"

const Modal = (props) => {
  const { isOpen, location, children } = props

  const [showDialog, setShowDialog] = useState(isOpen)

  return (
    <DialogOverlay
      isOpen={showDialog}
      onDismiss={() => {
        setShowDialog(false);
        navigate(`/gallery/`);
      }}
      css={css({
        zIndex: `modal`,
        background: "hsla(0, 0, 0, 0.8)",
        m: 0
      })}
    >
      <DialogContent
        css={css({
          mt: [0],
          width: `50vw`,
          maxWidth: `50vw`,
          p: 0,
          background: `unset`,
        })}
      >
        {children}
      </DialogContent>
    </DialogOverlay>
  );
}

export default Modal