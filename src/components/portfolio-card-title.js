import React from "react";
import PropTypes from "prop-types";
import { css, Styled } from "theme-ui";

import theme from '../gatsby-plugin-theme-ui'

const PortfolioCardTitle = (props) => {
  return (
    <Styled.h5
      css={css({
        display: `block`,
        textTransform: `uppercase`,
        letterSpacing: 1,
        fontFamily: `heading`,
        fontWeight: `bold`,
        color: `black`,
        fontSize: [2],
        mb: 0,
        [theme.mediaQueries.md]: {
          color: `white`,
          textOverflow: `ellipsis`
        }
      })}
      {...props}
    >
      {props.children}
    </Styled.h5>
  );
}

PortfolioCardTitle.propTypes ={
  children: PropTypes.node.isRequired,
}


export default PortfolioCardTitle