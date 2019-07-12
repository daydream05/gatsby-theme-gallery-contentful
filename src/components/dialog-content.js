import React from 'react'
import { DialogContent } from '@reach/dialog'
import { css } from 'theme-ui'

import theme from '../gatsby-plugin-theme-ui'


const CustomDialogContent = (props) => {
  return (
    <DialogContent
      css={css({
        mt: 5,
        p: 0,
        background: `unset`,
        width: `100%`,
        maxWidth: theme.breakpoints.lg,
        mx: `auto`,
      })}
      {...props}
    >
      {props.children}
    </DialogContent>
  )
}

export default CustomDialogContent