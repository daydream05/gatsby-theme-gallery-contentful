import React from "react";
import PropTypes from "prop-types";
import { css, Styled } from "theme-ui";

import theme from '../gatsby-plugin-theme-ui'

const PortfolioCardDescription = (props) => {
  return (
    <Styled.p
      css={css({
        color: `black`,
        fontFamily: `body`,
        lineHeight: 1.8,
        fontSize: [2],
        letterSpacing: 1,
        mt: 4,
        mb: [4,4,0],
        [theme.mediaQueries.md]: {
          color: `white`,
          textOverflow: `ellipsis`
        }
      })}
      {...props}
    >
      {props.children}
    </Styled.p>
  );
}

PortfolioCardDescription.propTypes = {
  children: PropTypes.node.isRequired
};


export default PortfolioCardDescription