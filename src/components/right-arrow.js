import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { css } from "theme-ui"

const RightArrow = props => {
  return (
    <div
      css={css({
        position: `absolute`,
        top: `50%`,
        right: 5,
        display: `flex`,
        alignItems: `center`,
      })}
    >
      <FaLongArrowAltRight
        css={css({
          fontSize: 4,
          color: `black`,
          cursor: `pointer`,
          translteY: `-50%`,
        })}
        aria-label="Previous page"
        {...props}
      />
    </div>
  );
};

export default RightArrow