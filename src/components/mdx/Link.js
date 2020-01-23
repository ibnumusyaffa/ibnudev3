import React from 'react'
import { Box } from 'atomic-layout'
import styled, { css } from 'styled-components'
import { GoLinkExternal } from 'react-icons/go'

const StyledLink = styled.a`
  ${({ isExternal }) =>
    isExternal &&
    css`
      display: inline-flex;
      align-items: center;
    `}
`

const Link = (props) => {
  const isExternal = /^https?:\/\//.test(props.href)
  return (
    <StyledLink
      {...props}
      target={isExternal && '_blank'}
      isExternal={isExternal}
      className="text-red-600"
    >
      {props.children}
      {isExternal && (
        <Box inline="true" as={GoLinkExternal}  />
      )}
    </StyledLink>
  )
}

export default Link
