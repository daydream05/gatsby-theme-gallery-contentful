import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { css } from "theme-ui"

const RightArrow = props => {
  return (
    <div
      css={css({
        position: `absolute`,
        height: `100%`,
        top: 0,
        right: 0,
        display: `flex`,
        alignItems: `center`,
        px: 4
      })}
    >
      <FaLongArrowAltRight
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
};

export default RightArrow