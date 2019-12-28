import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} className="no-underline">
              <div className="flex mt-5">
                <img
                  style={{ width: 240 }}
                  className="mr-5"
                  src="https://redd.one/static/39f78ca8891b1f175c25c2a3f67aa5b5/78311/thumbnail.jpg"
                ></img>
                <div>
                  <div className="flex items-center text-sm py-2">
                    <div className="text-red-600">Education</div>
                    <div className="px-3">·</div>
                    <div className="text-gray-600">December 24, 2019</div>
                  </div>
                  <h3>{node.frontmatter.title}</h3>
                  <p className="text-gray-900 text-sm">{node.excerpt}</p>
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
