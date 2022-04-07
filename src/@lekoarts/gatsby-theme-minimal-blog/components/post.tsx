/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

type PostProps = {
  data: {
    post: {
      slug: string
      title: string
      date: string
      tags?: {
        name: string
        slug: string
      }[]
      description?: string
      canonicalUrl?: string
      body: string
      excerpt: string
      timeToRead?: number
      banner?: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
  }
}

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

const Post = ({ data: { post } }: PostProps) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
      canonicalUrl={post.canonicalUrl}
    />
    <Heading as="h1" variant="styles.h4">
      {post.title}
    </Heading>
    <p sx={{ color: `secondary`, mt: 2, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{post.date}</time>
    </p>
    <section sx={
      {
        table: {
          maxWidth:'50%',
        },
        'table.demo': {
          maxWidth:'100%',
        },
        'th.demo': {
          paddingRight: '40px',
        },
        'td.demo': {
          paddingRight: '40px',
          verticalAlign: 'middle',
          lineHeight: '1.3',
        },
        'audio.demo': {
          width: '140px',
        },
        'span.success_accent_label': {
          // backgroundColor: "#0000ff",
          color: "#0000ff",
          fontWeight: "bold",
        },
        'span.fail_accent_label': {
          // backgroundColor: "#ff0000",
          color: "#ff0000",
          fontWeight: "bold",
        },
        'span.success_boundary_label': {
          // backgroundColor: "#0000ff",
          color: "#0000ff",
          fontWeight: "bold",
        },
        'span.fail_boundary_label': {
          // backgroundColor: "#ff0000",
          color: "#ff0000",
          fontWeight: "bold",
        },
        'span.fail_blank_label': {
          backgroundColor: "#ff0000",
          color: "#ff0000",
          fontWeight: "bold",
        },
      }
    }>
        <MDXRenderer>{post.body}</MDXRenderer>
    </section>
  </Layout>
)

export default Post
