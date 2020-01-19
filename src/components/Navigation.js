import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  position: relative;
  padding: 1.2rem 1rem;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    width: 0;
    background-color: red;
    margin: 0 auto;
    transition: width 0.2s ease;
  }

  &:hover {
    text-decoration: none;
  }

  &.active,
  &:hover {
    &:after {
      width: 100%;
    }
  }

  &.active:after {
    height: 2px;
  }
`
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
              className="m-0 p-0 hover:opacity-75"
              src={require("../assets/icon.svg")}
              style={{ maxWidth: 160 }}
            />
          </Link>
        </div>
        <div className="flex text-sm h-full items-center">
          <StyledLink to="/about" className="text-red-600" activeClassName="active">
            About
          </StyledLink>
        </div>
      </div>
    </div>
  )
}

export default Navigation
