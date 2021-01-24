import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"


import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { BlogInfo } from "../components/blog-info"
import { Tags } from "../components/tags"

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
  color: ${props => props.theme.color.primary}!important;
  font-family: ${props => props.theme.font.family};
  font-size: 1.75rem;
  margin-bottom: 0.4375rem;
  margin-top: 0;
`

const LinkToBlog = styled(Link)`
  box-shadow: none;
  font-size: 1.5rem;
    font-family: Fjalla One,sans-serif;
    line-height: 1.5;
}
`

// const Article = styled.article`
//   border: 1px solid ${props => props.theme.color.primary};
//   margin-bottom: 10px;
//   padding: 0 20px;
//   border-radius: 10px;
//   box-shadow: 2px 1px 5px ${props => props.theme.color.primary};
// `

// const Dot = styled.span`
//   margin-left: .5rem;
//   margin-right: .5rem;
//   display: inline-block;
//   text-transform: uppercase;
//   font-size: .875rem;
//   color: #4a4a4a;
// `;

// const Small = styled.small`
//   text-transform: uppercase;
//   font-size: .875rem;
//   color: #4a4a4a;
//   font-family: Open Sans,sans-serif;
//   line-height: 1.5;
// `

const Article = styled.article`
  display: flex;
  margin-bottom: 4rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  height: 170px;
  margin-bottom: 0.5rem;
  @media only screen and (min-width: 600px) {
    
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 1;
  transition-delay: 500ms;
`

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-height: 170px;
  height: 100%;
  
  img {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 600px) {
    width: 320px;
  }
`;

const Container = styled.div`
  @media only screen and (min-width: 600px) {
    margin-left: 20px;
  }
`;

const Section = styled.section`
  font-size: 1rem;
  font-family: Open Sans,sans-serif;
  line-height: 1.5;
`

const Aside = styled.aside`
  @media only screen and (min-width: 600px) {
    margin-left: 2rem;
    width: 25%;
  }
`

const FlexSection = styled.section`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const BlogsSection = styled.div`
  @media only screen and (min-width: 600px) {
    width: 75%;
  }
`

const BlogIndex = ({ data, location }) => {
  console.log(data)
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const author = data.site.siteMetadata.author

  return (
    <Layout location={location} title={siteTitle} author={author}>
      <SEO title="All posts" />
      {/* <Bio /> */}
      <FlexSection>
        <BlogsSection>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Article key={node.fields.slug}>
                <ImageContainer>
                  <LinkToBlog to={node.fields.slug}>
                    <ImageWrapper>
                      <Image src={node.frontmatter.featured_image.src} />
                    </ImageWrapper>
                  </LinkToBlog> 
                </ImageContainer>
                <Container>
                  <header>
                    <Title>
                      <LinkToBlog to={node.fields.slug}>{title}</LinkToBlog>
                    </Title>
                    <Tags tags={node.frontmatter.tags}/>
                    <BlogInfo date={node.frontmatter.date} timeToRead={node.timeToRead} />
                  </header>
                  <Section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </Section>
                </Container>
              </Article>
            )
          })}
        </BlogsSection>
        <Aside>
          <Bio />
        </Aside>
      </FlexSection>
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
      totalCount
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
            tags
            featured_image {
              alt
              src
              title
            }
          }
          timeToRead
        }
      }
    }
  }
`
