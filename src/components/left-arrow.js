import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { css } from "theme-ui"

const LeftArrow = (props) => {
  return (
    <div
      css={css({
        position: `absolute`,
        height: `100%`,
        top: 0,
        left: 0,
        display: `flex`,
        alignItems: `center`,
        px: 4
      })}
    >
      <FaLongArrowAltLeft
        css={css({
          fontSize: 4,
          color: `black`,
          cursor: `pointer`
        })}
        aria-label="Previous page"
        {...props}
      />
    </div>
  );
}

export default LeftArrow