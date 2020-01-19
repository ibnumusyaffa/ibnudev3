import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostItem from "./PostThumbnail"
import Seo from "../components/Seo"
const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <Seo
        keywords={[
          "redd",
          "developer",
          "technology",
          "javascript",
          "react",
          "programming",
          "blog",
        ]}
      ></Seo>
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
    allMdx(
      filter: { frontmatter: { date: { ne: null } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            category
            description
            image {
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
