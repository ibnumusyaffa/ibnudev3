import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostThumbnail from "../templates/PostThumbnail"
import Seo from "../components/Seo"
const BlogIndex = ({ data, location }) => {
  const { edges: posts } = data.allMdx
  console.log(location)
  return (
    <Layout>
      <Seo
        url={location.href}
        type="article"
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
          <PostThumbnail key={node.id} node={node}></PostThumbnail>
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
