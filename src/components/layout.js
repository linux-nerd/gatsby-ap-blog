import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

import { rhythm, scale } from "../utils/typography"

const AllBlogsHeader = styled.h1`
  ${props => {
    const { fontSize, lineHeight } = scale(1.5)
    return css`
      font-size: ${fontSize};
      line-height: ${lineHeight};
    `
  }};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`
const BlogPostHeader = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  color: #007acc;
`

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Layout = ({ location, title, author, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <AllBlogsHeader>
        <StyledLink to={`/`}>{title}</StyledLink>
      </AllBlogsHeader>
    )
  } else {
    header = (
      <BlogPostHeader>
        <StyledLink to={`/`}>{title}</StyledLink>
      </BlogPostHeader>
    )
  }
  return (
    <Container>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} <a href={author.homePage}>{author.name}</a>
      </footer>
    </Container>
  )
}

export default Layout
