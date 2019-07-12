import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from 'theme-ui'

import PortfolioCardTitle from './portfolio-card-title'
import PortfolioCardDescription from './portfolio-card-description'
import PortfolioCardCategory from './portfolio-card-category'

const PortfolioCard = (props) => {
  const { title, image, category, description, buttonText, linkTo } = props
  return (
    <Link
      to={linkTo}
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
      {...props}
    >
      <section
        css={css({
          position: `relative`,
          overflow: `hidden`
        })}
      >
        <Img
          fluid={image.fluid}
          alt={title}
          css={css({
            width: `100%`
          })}
        />
        <div
          className="card"
          css={css({
            display: `flex`,
            flexDirection: `column`,
            boxSizing: `border-box`,
            transition: `0.3s`,
            visibility: `hidden`,
            opacity: 0,
            px: [3, 3, 4],
            py: [4],
            height: `100%`,
            position: `absolute`,
            top: 0,
            backgroundColor: `black`,
            width: `100%`
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
          <button
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
  linkTo: PropTypes.isRequired,
};

PortfolioCard.defaultProps = {
  buttonText: `Learn more`,
}

export default PortfolioCard