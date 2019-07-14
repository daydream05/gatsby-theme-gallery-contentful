import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from 'theme-ui'

import theme from '../gatsby-plugin-theme-ui'

import PortfolioCardMedia from './portfolio-card-media'
import PortfolioCardTitle from './portfolio-card-title'
import PortfolioCardDescription from './portfolio-card-description'
import PortfolioCardCategory from './portfolio-card-category'
import PortfolioCardTextOverlay from './portfolio-card-text-overlay'
import PortfolioCardButton from './portfolio-card-button'


const PortfolioCard = (props) => {
  const {
    title,
    media,
    category,
    description,
    buttonText,
    linkTo,
    isBehindAModal,
    ...rest
  } = props;
  
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
          [theme.mediaQueries.md]: {
            position: `relative`,
            overflow: `hidden`
          }
        })}
      >
        {media && (
          <PortfolioCardMedia media={media} isBehindAModal={isBehindAModal} />
        )}
        <div
          className="card"
          css={css({
            px: [3, 3, 4],
            py: [3, 4, 4],
            [theme.mediaQueries.md]: {
              display: `flex`,
              flexDirection: `column`,
              boxSizing: `border-box`,
              transition: `0.3s`,
              visibility: `hidden`,
              opacity: 0,
              height: `100%`,
              position: `absolute`,
              top: 0,
              backgroundColor: `black`,
              width: `100%`
            }
          })}
        >
          <div
            css={css({
              [theme.mediaQueries.md]: {
                flex: 1,
                overflow: `hidden`
              }
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
            `}
          >
            <PortfolioCardTextOverlay />
            <PortfolioCardButton
              tabIndex="-1"
            >
              {buttonText}
            </PortfolioCardButton>
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