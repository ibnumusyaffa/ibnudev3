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
      <div className="flex items-center justify-center border-t-0 border-l-0 border-r-0 border-b border-gray-200 border-solid h-16">
        <div
          className="flex justify-between p-3 max-w-full items-center"
          style={{ width: 800 }}
        >
          <div className="flex items-center">
            <img
              className="m-0"
              src={require("../assets/icon.svg")}
              style={{ maxWidth: 175 }}
            />
          </div>
          <div>About</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div style={{ width: 800 }} className="p-5">
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}
