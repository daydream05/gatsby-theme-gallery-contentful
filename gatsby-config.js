module.exports = (themeOptions) => {
  return {
    siteMetadata: {
      basePath: themeOptions.basePath,
    },
    plugins: [
      `gatsby-plugin-theme-ui`,
      {
        resolve: `gatsby-source-contentful`,
        options: themeOptions.contentfulOptions,
      },
    ]
  };
}