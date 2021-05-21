exports.createPages = async ({ graphql, actions }) => {
    const path = require(`path`);
    const { data } = await graphql(`
    query ProjectsPage {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                    slug
                    date
                }
                id
            }
        }
    }
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
      actions.createPage({
        path: '/' + node.frontmatter.slug,
        component: path.resolve('./src/templates/project-details.js'),
        context: { slug: node.frontmatter.slug }
      })
    })
}



/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
