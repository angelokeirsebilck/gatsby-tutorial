import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

// Components
import Layout from '../components/Layout'

const Section = styled.section`
    width: 90vw;
    max-width: 1170px;
    text-transform: capitalize;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
    }

    @media screen and (min-width: 992px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const Article = styled.article`
    margin: 2rem 0;

    & span {
        margin-left: 2rem;
        color: gray;
    }

    & .gatsby-image-wrapper {
        height: 15rem;
    }
`

const products = ({ data }) => {
    const {
        allContentfulProduct: { nodes: productList },
    } = data

    return (
        <Layout>
            <Section>
                {productList.map(product => {
                    return (
                        <Article key={product.id}>
                            <Image
                                fluid={product.image.fluid}
                                alt={product.title}
                            />
                            <h3>
                                {product.title} <span>{product.price}</span>
                            </h3>
                            <Link to={`/products/${product.slug}`}>
                                More Details
                            </Link>
                        </Article>
                    )
                })}
            </Section>
            <h1>Hello from Products page</h1>
        </Layout>
    )
}

export const data = graphql`
    query {
        allContentfulProduct {
            nodes {
                slug
                price
                id
                title
                image {
                    fluid {
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
                info {
                    info
                }
            }
        }
    }
`
export default products
