import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import styled from 'styled-components'

const Section = styled.section`
    width: 90vw;
    max-width: 1170px;
    margin: 3rem auto;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        column-gap: 2rem;
    }
`
const Article = styled.article``

const ProductTemplate = ({
    data: {
        product: {
            price,
            title,
            image: { fixed },
            info: { info },
        },
    },
}) => {
    return (
        <Layout>
            <div style={{ textAlign: 'center' }}>
                <Link to="/products">Back to products</Link>
                <h1> Single proudct: {title}</h1>
            </div>
            <Section>
                <Article>
                    <Image fixed={fixed} alt={title} />
                </Article>
                <Article>
                    <h1>{title}</h1>
                    <h3>$ {price}</h3>
                    <p>{info}</p>
                    <button>Add to cart</button>
                </Article>
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query GetSingleProduct($slug: String) {
        product: contentfulProduct(slug: { eq: $slug }) {
            price
            title
            image {
                fixed(width: 300) {
                    ...GatsbyContentfulFixed
                }
            }
            info {
                info
            }
        }
    }
`

export default ProductTemplate
