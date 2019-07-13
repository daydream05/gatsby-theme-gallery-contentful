import React from "react";
import { css, Styled } from "theme-ui";

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
          color: `black`,
          textAlign: `center`,
          mb: [4]
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
              description={node.description && node.description.internal.content}
            />
          );
        })}
      </Masonry>
    </div>
  );
};

export default GalleryPageContent;
