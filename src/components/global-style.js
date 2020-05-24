import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.color.bg};
    color: ${props => props.theme.color.text};
    a {
      color: ${props => props.theme.color.primary};
    }
    img {
      background-color: ${props => props.theme.color.imgBg};
    }
    blockquote {
      color: ${props => props.theme.color.text};
      border-color: ${props => props.theme.color.text};
    }
    code[class*="language-text"] {
      background: ${props => props.theme.color.primary};
    }
  }
`
