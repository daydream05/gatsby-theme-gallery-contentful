import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { css } from "theme-ui"

const RightArrow = props => {
  return (
    <div
      role="button"
      tabindex="0"
      aria-label="Next page"
      css={css({
        position: `fixed`,
        top: `50%`,
        right: [3, 3, 3, 3, 5],
        display: `flex`,
        alignItems: `center`
      })}
    >
      <FaLongArrowAltRight
        css={css({
          fontSize: 4,
          color: `black`,
          cursor: `pointer`,
          translteY: `-50%`
        })}
        {...props}
      />
    </div>
  );
};

export default RightArrow