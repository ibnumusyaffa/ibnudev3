import React from "react"
import { Link } from "gatsby"
import styles from "./PostThumbnail.module.css"
import Img from "gatsby-image"
function PostThumbnail(props) {
  return (
    <div>
      <div className={styles.post}>
        <Link to={props.node.fields.slug} className="m-0">
          <Img fluid={props.node.frontmatter.image.childImageSharp.fluid} />
        </Link>

        <div className="">
          <Link to={props.node.fields.slug} className="no-underline">
            <h2 className="m-0 hover:underline">
              {props.node.frontmatter.title}
            </h2>
          </Link>

          <div className="flex items-center text-sm h-10">
            <div className="text-red-600">
              {props.node.frontmatter.category}
            </div>
            <div className="px-3">·</div>
            <div className="text-gray-700">{props.node.frontmatter.date}</div>
          </div>
          <p className="text-gray-900 text-sm leading-snug">
            {props.node.frontmatter.description || props.node.excerpt}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostThumbnail
