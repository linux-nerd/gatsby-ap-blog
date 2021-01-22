import React from "react"
import { Link } from "gatsby"
import styled, { css, ThemeProvider } from "styled-components"

import { rhythm, scale } from "../utils/typography"
import { lightTheme } from "../utils/theme"
import { GlobalStyle } from "./global-style"
// import { ThemeToggle } from "./theme-toggle"
// import { useTheme } from "../hooks/use-theme"

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
  max-width: ${rhythm(32)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Header = styled.header`
  display: flex;
  label {
    margin-left: auto;
  }
`

const Layout = ({ location, title, author, children }) => {
  // const { isLightTheme } = useTheme()

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
    <ThemeProvider theme={lightTheme }>
      <GlobalStyle />
      <Container>
        <Header>
          {header}
          {/* <ThemeToggle isLightTheme={isLightTheme} onToggle={toggleTheme} /> */}
        </Header>
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
