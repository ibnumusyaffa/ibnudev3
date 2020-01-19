import React from "react"
import { Link } from "gatsby"
function Navigation() {
  return (
    <div className="flex items-center justify-center sticky top-0 z-50  bg-white border-t-0 border-l-0 border-r-0 border-b border-gray-200 border-solid h-16">
      <div
        className="flex justify-between  items-center px-3 h-full"
        style={{ width: 700 }}
      >
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              alt=""
              className="m-0 p-0"
              src={require("../assets/icon.svg")}
              style={{ maxWidth: 160 }}
            />
          </Link>
        </div>
        <div className="flex text-sm h-full items-center">
          <Link
            to="/about"
            className="px-5 no-underline h-full text-red-600 flex justify-center items-center "
            activeClassName="border-b-2 border-red-300 border-solid border-t-0 border-r-0 border-l-0 sizing"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
