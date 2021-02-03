const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        query GetProducts {
            products: allContentfulProduct {
                nodes {
                    slug
                }
            }
        }
    `)

    return result.data.products.nodes.forEach(product => {
        createPage({
            path: `/products/${product.slug}`,
            component: path.resolve(`src/templates/ProductTemplate.js`),
            context: {
                slug: product.slug,
            },
        })
    })
}
