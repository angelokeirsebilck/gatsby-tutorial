/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: 'Gatsby Tutorial',
        description: 'Website using Gatsby.JS',
        author: 'Angelo Keirsebilck',
        data: ['item1', 'item2'],
        person: {
            name: 'Angelo',
            age: 31,
        },
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `aq5s7y9kcgnu`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.ACCESS_TOKEN,
            },
        },
    ],
}
