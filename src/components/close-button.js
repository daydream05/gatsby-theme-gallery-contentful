import React from 'react'
import { css } from 'theme-ui'

// I had a hard time resetting the button css T.T
// so i just used aria role and tabindex

const CloseButton = (props) => {
  return (
    <div
      css={css({
        color: `black`,
        fontSize: 6,
        fontFamily: `body`,
        position: `fixed`,
        textTransform: `none`,
        top: 5,
        right: [3, 3, 4, 4, 5],
        cursor: `pointer`,
        transition: `transform .3s`,
        transform: `translateZ(0) rotate(45deg)`,
        width: 48,
        height: 48,
        zIndex: 1,
        ":hover": {
          transition: `transform .3s`,
          transform: `translateZ(0) rotate(135deg)`
        }
      })}
      aria-label="close button"
      role="button"
      tabindex="0"
      {...props}
    >
      <div
        css={css({
          width: 8,
          height: 48,
          backgroundColor: `black`,
          margin: `auto`
        })}
      />
      <div
        css={css({
          width: 48,
          height: 8,
          backgroundColor: `black`,
          top: `-50%`,
          margin: `auto`,
          transform: `translateY(-50%)`,
          position: `relative`
        })}
      />
    </div>
  );
}

export default CloseButton