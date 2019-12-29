import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import styles from "./index.module.css"
export default ({ data }) => {
  return (
    <Layout>
      <div className="max-w-full">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} className="no-underline">
              <div className={styles.post}>
                {/* <div> */}
                  <img
                    className="w-full object-cover rounded m-0"
                    src={require("../assets/cover.jpg")}
                  ></img>
                {/* </div> */}
                <div className="px-1">
                  <div className="flex items-center text-sm mt-4 sm:mt-0">
                    <div className="text-red-600">Education</div>
                    <div className="px-3">·</div>
                    <div className="text-gray-600">December 24, 2019</div>
                  </div>
                  <h3 className="mt-2">{node.frontmatter.title}</h3>
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
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
