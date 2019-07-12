import React from "react";
import PropTypes from "prop-types";
import { css, Styled } from "theme-ui";

const PortfolioCardDescription = (props) => {
  return (
    <div
      css={css({
        overflow: `hidden`,
        flex: 1,
      })}
      {...props}
    >
      <Styled.p
        css={css({
          color: `white`,
          fontFamily: `body`,
          lineHeight: 1.8,
          fontSize: [2],
          letterSpacing: 1,
          textOverflow: `ellipsis`,
          mt: 4,
          mb: 0,
        })}
      >
        {props.children}
      </Styled.p>
    </div>
  );
}

PortfolioCardDescription.propTypes = {
  children: PropTypes.node.isRequired
};


export default PortfolioCardDescription