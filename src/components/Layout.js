import React from "react"
import Footer from "./Footer"
import Navigation from "./Navigation"
import Headroom from "react-headroom"
export default ({ children }) => {
  return (
    <React.Fragment>
      <Headroom>
        <Navigation></Navigation>
      </Headroom>

      <div className="flex justify-center">
        <div style={{ width: 750 }} className="px-4 mt-6 md:mt-10 max-w-full">
          {children}
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  )
}
