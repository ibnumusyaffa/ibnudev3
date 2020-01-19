import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer"
import Navigation from "./Navigation"
export default ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navigation></Navigation>
      <div className="flex justify-center">
        <div style={{ width: 700 }} className="px-4 mt-6 md:mt-10">
          {children}
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  )
}
