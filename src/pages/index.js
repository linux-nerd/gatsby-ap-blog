import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
  color: ${props => props.theme.color.primary}!important;
  font-family: ${props => props.theme.font.family};
  font-size: 1.75rem;
  margin-bottom: 0.4375rem;
`

const LinkToBlog = styled(Link)`
  box-shadow: none;
`

const Article = styled.article`
  border: 1px solid ${props => props.theme.color.primary};
  margin-bottom: 10px;
  padding: 0 20px;
  border-radius: 10px;
  box-shadow: 2px 1px 5px ${props => props.theme.color.primary};
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const author = data.site.siteMetadata.author

  return (
    <Layout location={location} title={siteTitle} author={author}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Article key={node.fields.slug}>
            <header>
              <Title>
                <LinkToBlog to={node.fields.slug}>{title}</LinkToBlog>
              </Title>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </Article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
          homePage
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
