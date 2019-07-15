import React from "react";
import PropTypes from "prop-types";
import { css, Styled } from "theme-ui";

import theme from '../gatsby-plugin-theme-ui'

const PortfolioCardDescription = (props) => {
  return (
    <Styled.p
      css={css({
        fontSize: [2, 2, 1],
        letterSpacing: 1,
        fontSize: [2,2,1],
        letterSpacing: 1,
        mb: [4,4,0],
        [theme.mediaQueries.md]: {
          color: `white`,
          textOverflow: `ellipsis`
        },
        variant: `portfolioCard.description`
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