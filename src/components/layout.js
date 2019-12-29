import React from "react"
// import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <React.Fragment>
      <div className="flex items-center justify-center sticky top-0  bg-white border-t-0 border-l-0 border-r-0 border-b border-gray-200 border-solid h-16">
        <div
          className="flex justify-between p-3 max-w-full items-center px3"
          style={{ width: 800 }}
        >
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="m-0 p-0"
                src={require("../assets/icon.svg")}
                style={{ maxWidth: 175 }}
              />
            </Link>
          </div>
          <div className="flex text-sm mr-4">
            <Link to="/about" className="pl-6 no-underline text-red-600">
              About
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div style={{ width: 800 }} className="px-4 mt-6 md:mt-10">
          {children}
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <div style={{ width: 800 }}>
          <div className="mx-4 py-4  border-solid border-t border-b-0 border-l-0 border-r-0 border-gray-200 text-sm text-gray-700">
            © 2019. Built with love and Gatsby.
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
