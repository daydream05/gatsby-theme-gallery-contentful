import React from 'react'
import { FaPinterest, FaFacebook, FaTwitter } from 'react-icons/fa'
import { css } from 'theme-ui'

// stolen from gatsbyjs :)

// Should we use StaticQuery instead?
// Kinda worried about long build times
// I keep hearing due to complex queries
// But i (Might be wrong on this)

const objectToParams = object =>
  `?` +
  Object.keys(object)
    .filter(key => !!object[key])
    .map(key => `${key}=${encodeURIComponent(object[key])}`)
    .join(`&`)


const PortfolioPageShareMenu = (props) => {
  const { url, media, description, title } = props
  console.log(props)
  return (
    <div
      css={css({
        gridColumn: 2,
        gridRow: 1,
        justifySelf: `end`,
        display: `flex`
      })}
    >
      <a
        {...linkAttrs}
        href={`https://pinterest.com/pin/create/button/${objectToParams({
          url: url,
          media: media,
          description: title,
        })}`}
        title="Share on Pinterest"
        css={css({
          ...linkStyle,
          borderRight: `none`
        })}
      >
        <FaPinterest />
      </a>
      <a
        {...linkAttrs}
        href={`https://www.facebook.com/sharer.php${objectToParams({
          u: url,
          t: title,
        })}`}
        title="Share on Facebook"
        css={css({
          ...linkStyle,
          borderRight: `none`
        })}
      >
        <FaFacebook />
      </a>
      <a
        {...linkAttrs}
        href={`https://twitter.com/share${objectToParams({
          url: url,
          text: title,
        })}`}
        title="Share on Twitter"
        css={css(linkStyle)}
      >
        <FaTwitter />
      </a>
    </div>
  );
}

export default PortfolioPageShareMenu

const linkStyle = {
  color: `black`,
  opacity: 0.5,
  fontSize: 3,
  border: `2px solid rgba(0,0,0,.2)`,
  width: `48px`,
  height: `48px`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`
}

const linkAttrs = {
  target: `_blank`,
  rel: `noopener noreferrer`,
}