import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import DefaultImage from "../images/redd-thumbnail.jpg"

function SEO({ type, meta, keywords, image, title, description, url }) {
  return (
    <StaticQuery query={detailsQuery}>
      {data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const twitterCard =
          type === "website" ? "summary" : "summary_large_image"
        const imageFullUrl = image
          ? data.site.siteMetadata.siteUrl + image
          : data.site.siteMetadata.siteUrl + DefaultImage
        const ogTitle = title
          ? `${title} | ${data.site.siteMetadata.title}`
          : data.site.siteMetadata.title
        console.log(imageFullUrl)

        return (
          <Helmet
            htmlAttributes={{
              lang: "id",
            }}
            title={ogTitle}
          >
            {/* General */}
            <meta name="description" content={metaDescription} />

            {/* OpenGraph */}
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={imageFullUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={ogTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={imageFullUrl} />
            <meta
              name="twitter:creator"
              content={data.site.siteMetadata.author}
            />

            {meta}
          </Helmet>
        )
      }}
    </StaticQuery>
  )
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        siteUrl
        title
        description
        author
      }
    }
  }
`
