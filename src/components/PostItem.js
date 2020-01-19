import React from "react"
import { Link } from "gatsby"
import styles from "./PostItem.module.css"
import Img from "gatsby-image"
function PostItem(props) {
  return (
    <div>
      <div className={styles.post}>
        <Link to={props.node.fields.slug} className="m-0">
          <Img fluid={props.node.frontmatter.cover.childImageSharp.fluid} />
        </Link>

        <div className="">
          <Link to={props.node.fields.slug} className="no-underline">
            <h3 className="m-0 hover:underline">
              {props.node.frontmatter.title}
            </h3>
          </Link>

          <div className="flex items-center text-xs h-10">
            <div className="text-red-600">
              {props.node.frontmatter.category}
            </div>
            <div className="px-3">·</div>
            <div className="text-gray-600">{props.node.frontmatter.date}</div>
          </div>
          <p className="text-gray-900 text-sm leading-snug">
            {props.node.excerpt}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostItem
