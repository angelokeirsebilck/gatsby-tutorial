import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const getData = graphql`
    {
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

const HeaderStatic = () => (
    <StaticQuery
        query={getData}
        render={data => <h4>{data.site.info.description}</h4>}
    ></StaticQuery>
)

export default HeaderStatic
