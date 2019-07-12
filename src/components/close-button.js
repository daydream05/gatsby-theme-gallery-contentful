import React from 'react'
import { css } from 'theme-ui'

const CloseButton = (props) => {
  return (
    <div
      css={css({
        fontColor: `black`,
        fontSize: 6,
        fontFamily: `body`,
        position: `fixed`,
        top: 5,
        right: 5,
        cursor: `pointer`,
        transition: `transform .3s`,
        transform: `translateZ(0) rotate(45deg)`,
        width: 48,
        height: 48,
        ":hover": {
          transition: `transform .3s`,
          transform: `translateZ(0) rotate(135deg)`
        }
      })}
      aria-label="close button"
      {...props}
    >
      <div
        css={css({
          width: 8,
          height: 48,
          backgroundColor: `black`,
          margin: `auto`,
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