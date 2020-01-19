import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer"
import Navigation from "./Navigation"
import Headroom from "react-headroom"
export default ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Headroom>
    
        <Navigation></Navigation>
      </Headroom>

      <div className="flex justify-center">
        <div style={{ width: 700 }} className="px-4 mt-6 md:mt-10">
          {children}
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  )
}
