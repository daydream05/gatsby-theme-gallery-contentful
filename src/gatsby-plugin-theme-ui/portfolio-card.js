const portfolioCard = {
  container: {
    bg: [`unset`, `unset`, `unset`, `text`],
    px: [3, 3, 3, 4, 4],
    py: [3, 4, 4, 4, 4]
  },
  title: {
    fontWeight: `bold`,
    fontFamily: `heading`,
    fontSize: [3, 3, 3, 3],
    letterSpacing: 1,
    color: [`text`, `text`, `text`, `muted`],
    mb: 4,
    mt: 0
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
    mt: [0]
  },
  description: {
    color: [`text`, `text`, `text`, `muted`],
    fontFamily: `body`,
    lineHeight: 1.8,
    fontSize: [2, 2, 2, 1],
    mb: [4, 4, 4, 0],
    letterSpacing: `widest`
  }
};

export default portfolioCard