module.exports = (themeOptions) => {
  return {
    plugins: [
      `gatsby-plugin-theme-ui`,
      {
        resolve: `gatsby-source-contentful`,
        options: themeOptions.contentfulOptions,
      },
    ]
  };
}