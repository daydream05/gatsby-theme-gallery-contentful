import React from "react";
import PropTypes from "prop-types";
import { css, Styled } from "theme-ui";


const PortfolioCardTitle = (props) => {
  return (
    <Styled.h5
      css={css({
        display: `block`,
        textTransform: `uppercase`,
        letterSpacing: 1,
        fontFamily: `heading`,
        fontWeight: `bold`,
        color: `white`,
        fontSize: [2],
        mb: 0,
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