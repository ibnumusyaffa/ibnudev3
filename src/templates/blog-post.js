import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="mt-8">
        <h1 className="text-center">{post.frontmatter.title}</h1>

        <p className="flex justify-center items-center">
          <div className="p-3">Education</div>
          <div className="">·</div>
          <div className="p-3">December 24, 2019</div>
          <div>·</div>
          <div className="p-3">5 minute(s) read</div>
        </p>

        <div className="mt-8">
          <img src={require("../assets/cover.jpg")} alt="" />
        </div>
        <div className="mt-8" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
