import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import styles from "./index.module.css"
import Img from "gatsby-image"
export default ({ data }) => {
  return (
    <Layout>
      <div className="max-w-full">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} className="no-underline">
              <div className={styles.post}>
                <Img fluid={node.frontmatter.cover.childImageSharp.fluid} />
                <div className="">
                  <h3 className="m-0">{node.frontmatter.title}</h3>
                  <div className="flex items-center text-xs h-10">
                    <div className="text-red-600">Education</div>
                    <div className="px-3">·</div>
                    <div className="text-gray-600">December 24, 2019</div>
                  </div>
                  <p className="text-gray-900 text-sm leading-snug">
                    {node.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </div>
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
