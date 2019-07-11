import React from 'react'
import { DialogOverlay } from '@reach/dialog'
import { css } from 'theme-ui'

const CustomDialogOverlay = (props) => {
  return (
    <DialogOverlay
      css={css({
        display: `flex`,
        alignItems: `center`,
        zIndex: `modal`,
        background: "hsla(0,4%,95%,.95)",
        m: 0
      })}
      {...props}
    >
      {props.children}
    </DialogOverlay>
  )
}

export default CustomDialogOverlay