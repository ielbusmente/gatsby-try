import React from "react"
import Layout from "../components/Layout"
// import Navbar from "../components/Navbar"
import * as styles from "../styles/home.module.css"
import leaderPic from "../../static/leader.png"
import { graphql } from "gatsby"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div className={styles.hello}>
        <img src={leaderPic} />

        <h1>Hello world!</h1>
        <h2>By iel</h2>
        <h3>Site Metadata</h3>
        <p>{data.site.siteMetadata.title}</p>
        <p>{data.site.siteMetadata.description}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
