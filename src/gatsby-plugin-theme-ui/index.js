import { funk } from '@theme-ui/presets'

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

const letterSpacings = {
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
}

const portfolioCard = {
  container: {
    bg: [`muted`, `muted`, `muted`, `text`],
    px: [3, 3, 3, 4, 4],
    py: [3, 4, 4, 4, 4]
  },
  title: {
    fontWeight: `bold`,
    fontFamily: `heading`,
    fontSize: [3, 3, 3, 3],
    letterSpacing: 1,
    color: [`text`, `text`, `text`, `muted`],
    mb: 4
  },
  textOverlay: {
    background: `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 3%,
      rgb(0, 0, 0) 100%
    )`
  },
  category: {
    fontFamily: `body`,
    color: [`text`, `text`, `text`, `muted`],
    letterSpacing: `widest`,
    fontSize: [0],
    opacity: 0.8,
    mb: [2, 2, 3],
    mt: [0]
  },
  description: {
    color: [`text`, `text`, `text`, `muted`],
    fontFamily: `body`,
    lineHeight: 1.8,
    fontSize: [2, 2, 2, 1],
    mb: [4, 4, 4, 0],
    letterSpacing: `widest`,
  }
}


const masonry = {
  gridContainer: {},
  grid: {},
  gridItem: {},
  gridSizer: {}
};

console.log(funk)

export default {
  ...funk,
  mediaQueries,
  breakpoints,
  letterSpacings,
  zIndices,
  portfolioCard,
  masonry,
}