import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"

function Share({ title, url }) {
  return (
    <div className="bg-gray-200 rounded-sm  h-auto flex items-center flex-col p-5 mt-12">
      <h3>Share this post</h3>
      <div className="text-sm">
        Liked this article? Please support publications like this by sharing it
        with your friends.
      </div>
      <div className="mt-5  w-24 flex justify-between">
        <FacebookShareButton url={url}>
          <FacebookIcon size={48} round />
        </FacebookShareButton>
        <TwitterShareButton title={title} url={url}>
          <TwitterIcon size={48} round />
        </TwitterShareButton>
      </div>
    </div>
  )
}

export default Share
