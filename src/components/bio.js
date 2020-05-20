/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const Container = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`

const StyledImage = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 50;
  border-radius: 100%;
`

const gq = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
          summary
          homePage
        }
        description
        social {
          twitter
        }
      }
    }
  }
`

const Bio = () => {
  const data = useStaticQuery(gq)

  const { author, description } = data.site.siteMetadata
  return (
    <Container>
      <StyledImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        {author.summary}
        &nbsp;
        <strong>
          <a href={author.homePage}>{author.name}</a>
        </strong>
        <br />
        {description}
      </p>
    </Container>
  )
}

export default Bio
