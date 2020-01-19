import React from "react"
import {  graphql } from "gatsby"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <div className="max-w-full">
        {posts.map(({ node }) => (
          <PostItem key={node.id} node={node}></PostItem>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
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

export default BlogIndex
