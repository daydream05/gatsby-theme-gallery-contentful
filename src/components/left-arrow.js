import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { css } from "theme-ui"

const LeftArrow = (props) => {
  return (
    <div
      role="button"
      tabindex="0"
      aria-label="Previous page"
      css={css({
        position: `fixed`,
        top: `50%`,
        left: [3, 3, 3, 3, 5],
        display: `flex`,
        alignItems: `center`
      })}
    >
      <FaLongArrowAltLeft
        css={css({
          fontSize: 4,
          color: `black`,
          cursor: `pointer`,
          translateY: `-50%`
        })}
        {...props}
      />
    </div>
  );
}

export default LeftArrow