import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Fb from "../assets/fb"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="mt-3">
        <h1 className="text-left sm:text-center">{post.frontmatter.title}</h1>

        <div className="sm:flex sm:justify-center sm:items-center">
          <div className="text-red-600">Education</div>
          <div className="flex">
            <div className="hidden sm:block mx-3">·</div>
            <div className="">December 24, 2019</div>
            <div className="mx-3">·</div>
            <div className="">5 minute(s) read</div>
          </div>
        </div>

        <div className="mt-8">
          <img src={require("../assets/cover.jpg")} alt="" />
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
        <div className="flex justify-center items-center sm:justify-start sm:items-start mt-10 flex-col sm:flex-row">
          {/* <div className="flex justify-center items-center"> */}
          <img
            className="rounded-full"
            style={{ width: 150, height: 150 }}
            src="https://images.unsplash.com/photo-1576915172306-b22bb6aae18d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500"
            alt=""
          />
          {/* </div> */}
          <div className="">
            <div className="sm:ml-5">
              <div className="font-bold text-2xl p-0">Ibnu Musyaffa</div>
              <p className="leading-tight">
                Hi! My name is Ibnu and I am a Full-stack JavaScript engineer,
                rock-n-roll musician and medical doctor.
              </p>
            </div>
          </div>
        </div>
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
