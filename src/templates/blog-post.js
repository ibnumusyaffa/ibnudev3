import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import Avatar from "../components/Avatar"
import Img from "gatsby-image"
import Share from "../components/Share"
import MdxProvider from "../components/mdx/MdxProvider"
export default function PageTemplate({ data: { mdx }, location }) {
  const post = mdx
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
            <div className="">{post.fields.readingTime.text}</div>
          </div>
        </div>
        <div className="mt-8">
          <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
        </div>
        <div
          className="sm:mt-4"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <MdxProvider>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MdxProvider>

        <Share
          title={post.frontmatter.title}
          url={location.origin + location.pathname}
        ></Share>
        <Avatar></Avatar>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
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
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
