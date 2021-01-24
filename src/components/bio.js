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
// import styled from "styled-components"
// import { rhythm } from "../utils/typography"

// const Container = styled.div`
//   display: flex;
//   margin-bottom: ${rhythm(2.5)};
// `

// const StyledImage = styled(Image)`
//   margin-right: ${rhythm(1 / 2)};
//   margin-bottom: 0;
//   min-width: 50;
//   border-radius: 100%;
// `

const gq = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 220, height: 320) {
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

const Div = styled.div`
  flex: none;
  margin-right: 1rem;
  padding: 1rem;
  margin-bottom: 3rem;
  background-color: #f2faff;
`

const Title = styled.h2`
margin-top: 0;
  text-align: right;
  text-transform: uppercase;
  font-size: 1rem;
  color: #4a4a4a;
  margin-bottom: 1.5rem;
  line-height: 1.25;
  font-family: Fjalla One,sans-serif;
 border-bottom: 1px solid #4a4a4a; 
`

const Description = styled.p`
  font-size: .875rem;
  color: #4a4a4a;
  margin: 0;
`

const Name = styled.h3`
  margin-top: 0;
`

const Link = styled.a`
  box-shadow: none;
    color: #4a4a4a;
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
`

const ImageLink = styled.a`
      text-decoration: none;
    color: transparent;
`
const StyledImage = styled(Image)`
  @media only screen and (max-width: 600px) {
    &&& {
      width: 100%!important;
    }
    
  }
`

const Bio = () => {
  const data = useStaticQuery(gq)

  const { author, description } = data.site.siteMetadata
  return (
    <Div>
      <Title>About me</Title>
      <ImageLink href="https://abhishekprakash.com">
        <StyledImage fixed={data.avatar.childImageSharp.fixed} alt={author.name} />
      </ImageLink>
      <Name title={author.name}>
        <Link href="https://abhishekprakash.com">{author.name}</Link>
      </Name>
      {/* <p>
        <a href="https://mentors.codingcoach.io/?technology=flutter">flutter</a>
        <a href="https://mentors.codingcoach.io/?technology=android">android</a>
        <a href="https://mentors.codingcoach.io/?technology=ios">ios</a>
      </p> */}
      <Description>{description}</Description>
    </Div>
  )
}

export default Bio


/**
 * <Container>
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
 */