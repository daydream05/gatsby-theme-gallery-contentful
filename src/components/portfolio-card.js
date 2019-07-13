import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from 'theme-ui'

import theme from 'gatsby-plugin-theme-ui'

import PortfolioCardMedia from './portfolio-card-media'
import PortfolioCardTitle from './portfolio-card-title'
import PortfolioCardDescription from './portfolio-card-description'
import PortfolioCardCategory from './portfolio-card-category'

const PortfolioCard = (props) => {
  const { title, media, category, description, buttonText, linkTo, ...rest } = props
  return (
    <Link
      to={linkTo}
      title={`Read more about the "${title}" project`}
      css={css({
        textDecoration: `none`,
        ":hover, :focus, :active": {
          ".card": {
            transition: `0.3s opacity`,
            visibility: `visible`,
            opacity: 1
          }
        }
      })}
      {...rest}
    >
      <section
        css={css({
          position: `relative`,
          overflow: `hidden`
        })}
      >
        {media && <PortfolioCardMedia media={media} />}
        <div
          className="card"
          css={css({
            display: `flex`,
            flexDirection: `column`,
            boxSizing: `border-box`,
            transition: `0.3s`,
            visibility: `hidden`,
            opacity: 0,
            px: [3, 4, 4],
            py: [3, 4, 4],
            height: `100%`,
            position: `absolute`,
            top: 0,
            backgroundColor: `black`,
            width: `100%`
          })}
        >
          <div
            css={css({
              flex: 1,
              overflow: `hidden`,
            })}
          >
            {category && (
              <PortfolioCardCategory>{category}</PortfolioCardCategory>
            )}
            <PortfolioCardTitle>{title}</PortfolioCardTitle>
            {title && (
              <PortfolioCardDescription>
                {description}
              </PortfolioCardDescription>
            )}
          </div>
          <div
            css={css`
              position: relative;
              &::before {
                content: "";
                position: absolute;
                top: 0;
                transform: translateY(-100%);
                width: 100%;
                height: 100%;
                background: linear-gradient(
                  180deg,
                  rgba(29, 29, 29, 0) 3%,
                  rgb(29, 29, 29) 100%
                );
              }
            `}
          >
            <button
              tabIndex="-1"
              css={css({
                border: `2px solid white`,
                backgroundColor: `unset`,
                color: `white`,
                cursor: `pointer`,
                fontSize: [1],
                textTransform: `uppercase`,
                py: 3,
                px: 3,
                letterSpacing: 2,
                display: `flex`,
                justifyContent: `space-between`,
                alignItems: `center`,
                alignSelf: `flex-start`,
                transition: `0.3s`,
                ":hover, :focus": {
                  backgroundColor: `white`,
                  transition: `0.3s`,
                  color: `black`
                }
              })}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </section>
    </Link>
  );
}

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.object
  }),
  category: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  linkTo: PropTypes.string.isRequired,
};

PortfolioCard.defaultProps = {
  buttonText: `Learn more`,
}

export default PortfolioCard