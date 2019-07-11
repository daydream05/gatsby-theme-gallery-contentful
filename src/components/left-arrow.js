import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { css } from "theme-ui"

const LeftArrow = (props) => {
  return (
    <div
      css={css({
        position: `absolute`,
        top: `50%`,
        left: 4,
        display: `flex`,
        alignItems: `center`,
      })}
    >
      <FaLongArrowAltLeft
        css={css({
          fontSize: 4,
          color: `black`,
          cursor: `pointer`,
          translateY: `-50%`,
        })}
        aria-label="Previous page"
        {...props}
      />
    </div>
  );
}

export default LeftArrow