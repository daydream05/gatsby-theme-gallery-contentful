import { funk } from '@theme-ui/presets'
import { merge } from 'lodash'

import breakpoints from './breakpoints'
import mediaQueries from './media-queries'
import letterSpacings from './letter-spacings'
import zIndices from './z-indices'
import portfolioCard from './portfolio-card'
import masonry from './masonry'
import colors from './colors'
import galleryPage from './gallery-page'

const baseTheme = merge(
  funk,
  {
    mediaQueries,
    breakpoints,
    letterSpacings,
    zIndices,
    portfolioCard,
    masonry,
    colors,
    galleryPage
  }
)

export default baseTheme