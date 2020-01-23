import React from "react"
import styled from "styled-components"
import { Box, Composition } from "atomic-layout"
import { GoRepo } from "react-icons/go"

import Text from "../Text"

const StyledContainer = styled.div`
  background-color: #f6f8fa;
  border-radius: 3px;
`

const GitHubRepo = ({ owner, repo }) => {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then(res => res.json())
      .then(setData)
  }, [owner, repo])

  return (
    <div className="flex justify-center items-center bg-gray-200 rounded py-5">
      <div>
        <GoRepo size="48"></GoRepo>
      </div>

      <div className="flex justify-center flex-col">
        {data ? (
          <>
            <a href={data.html_url}>{data.name}</a>
            <div className="text-sm">{data.description}</div>
          </>
        ) : (
          <Text small>Communicating to the octocat...</Text>
        )}
      </div>
    </div>
  )
}

export default GitHubRepo
