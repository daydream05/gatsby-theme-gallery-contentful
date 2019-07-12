const slugify = require('slugify')

exports.onCreateNode = (
  { node, actions },
  { basePath = `/gallery/`}
) => {
  const { createNodeField } = actions
  
  // We create a url path for each image
  // using the title, gallery root path and id
  // e.g. /gallery/this-image-title-938128129/
  if(node.internal.type === `ContentfulPhoto`) {
    const slug = `${slugify(node.title)}-${node.id}`
    const url = `${basePath}${slug}/`;

    console.log(node);

    createNodeField({
      node,
      name: `path`,
      value: url,
    })

    console.log(`path created`)

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }

  if (node.internal.type === `ContentfulVideo`) {
    const slug = slugify(node.title);
    const url = `${basePath}${slug}-${node.id}/`;

    createNodeField({
      node,
      name: `path`,
      value: url
    })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  } 
}

exports.createPages = ({ graphql, actions }, { basePath = `/gallery/` }) => {
  const { createPage } = actions;

  // create a page for each media item

  const loadGallery = new Promise((resolve, reject) => {
    graphql(`
      {
        contentfulGallery {
          media {
            __typename
            ... on ContentfulPhoto {
              fields {
                path
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      console.log(result);
      const mediaList = result.data.contentfulGallery.media;
      mediaList.map(media => {
        if (media.__typename === `ContentfulPhoto`) {
          createPage({
            path: media.fields.path,
            component: require.resolve(`./src/templates/portfolio-template.js`),
            context: {
              slug: media.fields.slug
            }
          });
        }
      });
      resolve();
    });
  });

  // create a root page for gallery
  createPage({
    path: `${basePath}`,
    component: require.resolve(`./src/templates/gallery-template.js`)
  });

  return Promise.all([loadGallery]);
};