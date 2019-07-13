import React from "react";
import PropTypes from "prop-types";
import { css } from "theme-ui";

import theme from '../gatsby-plugin-theme-ui'

const PortfolioCardCategory = (props) => {
  return (
    <span
      css={css({
        display: `block`,
        textTransform: `uppercase`,
        letterSpacing: 1,
        fontFamily: `body`,
        color: `black`,
        opacity: 0.8,
        fontSize: [0],
        mb: [2, 2, 3],
        mt: [0],
        [theme.mediaQueries.md]: {
          color: `white`
        }
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