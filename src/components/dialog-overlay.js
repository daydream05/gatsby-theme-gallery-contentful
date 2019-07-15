import React from 'react'
import { DialogOverlay } from '@reach/dialog'
import { css } from 'theme-ui'

const CustomDialogOverlay = (props) => {
  return (
    <DialogOverlay
      css={css({
        zIndex: `modal`,
        background: "hsla(0,4%,95%,.95)",
        py: 4,
        px: [3, 3, 3, 4, 6,0]
      })}
      {...props}
    >
      {props.children}
    </DialogOverlay>
  );
}

export default CustomDialogOverlay