import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Tabs from "../components/tabs"
import Welcome from "../components/welcome"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Welcome />

    <Tabs />

  </Layout>
)

export default IndexPage
