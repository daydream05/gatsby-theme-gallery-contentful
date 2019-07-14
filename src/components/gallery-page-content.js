import React from "react";
import { css, Styled } from "theme-ui";

import theme from '../gatsby-plugin-theme-ui'

import Masonry from "./masonry";
import PortfolioCard from "./portfolio-card";

const GalleryPageContent = ({ data, isBehindAModal }) => {
  return (
    <div
      css={css({
        pt: [4]
      })}
    >
      <Styled.h1
        css={css({
          maxWidth: theme.breakpoints.xl,
          px: 3,
          mb: [4,4,5],
          mx: `auto`,
          color: `black`,
          textAlign: `left`,
          fontSize: [5,5,6]
        })}
      >
        Gallery
      </Styled.h1>
      <Masonry>
        {data.allContentfulPortfolio.edges.map(({ node }, index) => {
          return (
            <PortfolioCard
              isBehindAModal={isBehindAModal}
              key={`${node.id}-${index}`}
              className="grid-item"
              title={node.title}
              media={node.media}
              category={node.category}
              linkTo={node.fields.path}
              description={
                node.description && node.description.internal.content
              }
            />
          );
        })}
      </Masonry>
    </div>
  );
};

export default GalleryPageContent;
