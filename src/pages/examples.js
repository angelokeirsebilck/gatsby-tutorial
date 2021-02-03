import React from 'react'
import { graphql } from 'gatsby'

// Components
import Layout from '../components/Layout'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'

const examples = ({ data }) => {
    const {
        site: {
            info: { author },
        },
    } = data
    return (
        <Layout>
            <h1>Examples</h1>
            <Header />
            <HeaderStatic />
            <h5>{author}</h5>
        </Layout>
    )
}

export const data = graphql`
    query {
        site {
            info: siteMetadata {
                author
                data
                description
                title
                person {
                    age
                    name
                }
            }
        }
    }
`
export default examples
