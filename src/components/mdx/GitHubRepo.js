import React from "react"
import styled from "styled-components"
import { Box, Composition } from "atomic-layout"
import { GoRepo } from "react-icons/go"

import Text from "../Text"

const Container = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  /* align-content: center; */
  /* justify-content:center; */
  background-color: #f6f8fa;
  border-radius: 3px;
  padding:15px;
`

const GitHubRepo = ({ owner, repo }) => {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then(res => res.json())
      .then(setData)
  }, [owner, repo])

  return (
    <Container className="mb-5">
      <div className="pt-2">
        <GoRepo size="48"></GoRepo>
      </div>
      <div className="">
        {data ? (
          <>
            <a className="p-0 m-0 text-red-600" href={data.html_url}>{data.name}</a>
            <div className="text-sm">{data.description}</div>
          </>
        ) : (
          <Text small>Communicating to the octocat...</Text>
        )}
      </div>
    </Container>
  )
}

export default GitHubRepo
