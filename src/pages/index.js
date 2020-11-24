import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Ninja's thoughts</h1>
      <p>Ninja currently has { data.allMarkdownRemark.totalCount } thoughts</p>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h2>{ node.frontmatter.title } - { node.frontmatter.date }</h2>
            <p>{ node.frontmatter.excerpt }</p>
            <Link to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
          </div>
        ))
      }
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            description
            title
          }
        }
      }
      totalCount
    }
  }
`
