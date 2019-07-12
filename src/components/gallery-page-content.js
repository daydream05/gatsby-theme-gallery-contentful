import React from "react";
import { css, Styled } from "theme-ui";

import Masonry from "./masonry";
import PortfolioCard from "./portfolio-card";

const GalleryPageContent = ({ data }) => {
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
          {data.allContentfulPhoto.edges.map(({ node }) => {
            return (
              <PortfolioCard
                key={node.id}
                title={node.title}
                image={node.media}
                category={node.category}
                linkto={node.fields.path}
                description="We are 10 sparkling minds exploring human
                    communication via digital assets..."
                className="grid-item"
              />
            );
          })}
        </Masonry>
      </div>
  )
};

export default GalleryPageContent;
