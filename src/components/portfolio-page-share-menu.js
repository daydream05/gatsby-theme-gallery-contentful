import React, { useState } from 'react'
import { FaPinterest, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { MdShare } from 'react-icons/md'
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
  const { url, media, title } = props

  const [open, setOpen] = useState(false)

  return (
    <div
      css={css({
        gridColumn: 2,
        gridRow: 1,
        justifySelf: `end`,
        display: `flex`,
        flexDirection: `row-reverse`
      })}
    >
      <button
        onClick={() => setOpen(!open)}
        css={css({
          background: `unset`,
          padding: 0,
          cursor: `pointer`,
          ...linkStyle
        })}
      >
        <MdShare />
      </button>
      {open && (
        <div
          css={css({
            display: `flex`,
            flexDirection: `row-reverse`
          })}
        >
          <a
            {...linkAttrs}
            href={`https://pinterest.com/pin/create/button/${objectToParams({
              url: url,
              media: media,
              description: title
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
              t: title
            })}`}
            title="Share on Facebook"
            css={css({
              ...linkStyle,
              borderRight: `none`
            })}
          >
            <FaFacebookF />
          </a>
          <a
            {...linkAttrs}
            href={`https://twitter.com/share${objectToParams({
              url: url,
              text: title
            })}`}
            title="Share on Twitter"
            css={css({
              ...linkStyle,
              borderRight: `none`
            })}
          >
            <FaTwitter />
          </a>
        </div>
      )}
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
  justifyContent: `center`,
  boxSizing: `border-box`,
}

const linkAttrs = {
  target: `_blank`,
  rel: `noopener noreferrer`,
}