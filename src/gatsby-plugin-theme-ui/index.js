import { base } from '@theme-ui/presets'

const breakpoints = [`320px`, `550px`, `750px`, `1000px`, `1200px`, `1600px`, `2800px`];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];
breakpoints.xxxl = breakpoints[6];

const zIndices = {
  modal: `101`
};

let mediaQueries = {};
for (let breakpoint in breakpoints) {
  mediaQueries[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`;
}

const portfolioCard = {
  container: {
    bg: [`white`, `white`, `white`, `black`],
    p: [3, 3, 3, 4]
  },
  title: {
    fontWeight: `bold`,
    fontFamily: `heading`,
    fontSize: [3,3,3,2],
    letterSpacing: 1,
    color: [`black`, `black`, `black`, `white`],
    mb: 4
  },
  textOverlay: {
    background: `linear-gradient(
      180deg,
      rgba(29, 29, 29, 0) 3%,
      rgb(29, 29, 29) 100%
    )`
  },
  category: {
    fontFamily: `body`,
    color: [`black`, `black`, `black`, `white`],
    letterSpacing: 1,
    fontSize: [0],
    opacity: 0.8,
    mb: [2, 2, 3],
    mt: [0]
  },
  description: {
    color: [`black`,`black`,`black`,`white`],
    fontFamily: `body`,
    lineHeight: 1.8,
    fontSize: [2, 2, 2, 1],
    mb: [4, 4, 4, 0],
    letterSpacing: 1,
  }
};


const masonry = {
  gridContainer: {},
  grid: {},
  gridItem: {},
  gridSizer: {}
};

export default {
  ...base,
  mediaQueries,
  breakpoints,
  zIndices,
  portfolioCard,
  masonry,
}