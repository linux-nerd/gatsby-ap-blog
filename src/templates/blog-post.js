import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Gitalk from "gitalk"
import { BlogInfo } from "../components/blog-info"

const Title = styled.h1`
  margin-top: ${rhythm(1)};
  margin-bottom: 0;
`
// const SubTitle = styled.p`
//   ${props => {
//     const { fontSize, lineHeight } = scale(-1 / 5)
//     return css`
//       font-size: ${fontSize};
//       line-height: ${lineHeight};
//     `
//   }};
//   margin-bottom: ${rhythm(1)};
//   display: block;
// `

const Divider = styled.hr`
  margin-bottom: ${rhythm(1)};
`

const NavigationContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const author = data.site.siteMetadata.author
  const { previous, next } = pageContext

  useEffect(() => {
    const gitalk = new Gitalk({
      clientID: "0303f48d682b418752b6",
      clientSecret: "e877555dcce1c8eac96cdc50a85b0825cbf32c1e",
      repo: "ap-blog-comments",
      owner: "linux-nerd",
      admin: ["linux-nerd"],
      id: post.id, // Ensure uniqueness and length less than 50
      title: `Comments on '${post.frontmatter.title}'`,
      body: `This issue exists to host comments for ${location.href}`,
      distractionFreeMode: false, // Facebook-like distraction free mode
    })

    gitalk.render("gitalk-container")
  }, [location, post.frontmatter.title, post.id])

  return (
    <Layout location={location} title={siteTitle} author={author}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <Title>{post.frontmatter.title}</Title>
          {/* <SubTitle>{post.frontmatter.date}</SubTitle> */}
          <BlogInfo date={post.frontmatter.date} timeToRead={post.timeToRead} />
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <Divider />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <NavigationContent>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </NavigationContent>
      </nav>
      <div id="gitalk-container" />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
          homePage
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      },
      timeToRead
    }
  }
`
