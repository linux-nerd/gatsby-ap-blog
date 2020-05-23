import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { css, ThemeProvider } from "styled-components"

import { rhythm, scale } from "../utils/typography"
import { darkTheme, lightTheme } from "../utils/theme"
import { GlobalStyle } from "./global-style"

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
  font-family: ${props => props.theme.font.family};
  margin-top: 0;
  color: ${props => props.theme.color.primary};
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
  const [isLightTheme, setIsLightTheme] = useState(true)
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

  const toggleTheme = () => setIsLightTheme(prevState => !prevState)
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <header>
          {header}
          <input
            type="checkbox"
            checked={isLightTheme}
            onChange={toggleTheme}
          />
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}{" "}
          <a href={author.homePage}>{author.name}</a>
        </footer>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
