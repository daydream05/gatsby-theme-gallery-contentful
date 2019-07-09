exports.createPages = (
  { graphql, actions },
  { pagePath = `/gallery/`}
) => {
  const { createPage } = actions

  createPage({
    path: `${pagePath}`,
    component: require.resolve(`./src/templates/gallery-template.js`),
  })
}