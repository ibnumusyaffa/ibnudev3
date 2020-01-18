import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Fb from "../assets/fb"
import Avatar from "../components/Avatar"
import Img from "gatsby-image"
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="mt-3">
        <h1 className="text-left sm:text-center">{post.frontmatter.title}</h1>
        <div className="sm:flex sm:justify-center sm:items-center">
          <div className="text-red-600">{post.frontmatter.category}</div>
          <div className="flex">
            <div className="hidden sm:block mx-3">·</div>
            <div className="">{post.frontmatter.date}</div>
            <div className="mx-3">·</div>
            <div className="">5 minute(s) read</div>
          </div>
        </div>
        <div className="mt-8">
          <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
        </div>
        <div
          className="sm:mt-4"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="bg-gray-200 rounded-sm  h-auto flex items-center flex-col p-5 mt-12">
          <h3>Share this post</h3>
          <div className="text-sm">
            Liked this article? Please support publications like this by sharing
            it with your friends.
          </div>
          <div className="mt-5">
            <Fb></Fb>
            <Fb></Fb>
            <Fb></Fb>
          </div>
        </div>
        <Avatar></Avatar>
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
        category
        date(formatString: "DD MMMM, YYYY")
        cover {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
