import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Template({
  data, // это свойтсво передается из GraphQL запроса, который описан ниже.
}) {
  const { markdownRemark } = data // data.markdownRemark содержит информацию о записи
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
