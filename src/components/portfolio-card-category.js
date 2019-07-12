import React from "react";
import PropTypes from "prop-types";
import { css, Styled } from "theme-ui";


const PortfolioCardCategory = (props) => {
  return (
    <span
      css={css({
        display: `block`,
        textTransform: `uppercase`,
        letterSpacing: 1,
        fontFamily: `body`,
        color: `white`,
        opacity: 0.8,
        fontSize: [0],
        mb: [2, 2, 3]
      })}
      {...props}
    >
      {props.children}
    </span>
  );
}

PortfolioCardCategory.propTypes = {
  children: PropTypes.node.isRequired
};


export default PortfolioCardCategory