import React from "react";
import PropTypes from "prop-types";
import { css, Styled } from "theme-ui";


const PortfolioCardDescription = (props) => {
  return (
    <Styled.p
      css={css({
        color: `white`,
        fontFamily: `body`,
        lineHeight: 1.8,
        fontSize: [2],
        letterSpacing: 1,
        flex: 1,
        overflow: `hidden`,
        textOverflow: `ellipsis`
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