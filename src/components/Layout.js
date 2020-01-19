import React from "react"

import Footer from "./Footer"
import Navigation from "./Navigation"
export default ({ children }) => {
  return (
    <React.Fragment>
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
