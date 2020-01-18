import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import PostItem from "../components/PostItem"
export default ({ data }) => {
  return (
    <Layout>
      <div className="max-w-full">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostItem key={node.id} node={node}></PostItem>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
            
            cover {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`
