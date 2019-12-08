import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={`${post.frontmatter.title}`}>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            <br />
            <small>{post.frontmatter.date}</small>
          </li>
        ))}
      </ul>
      <hr />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`
