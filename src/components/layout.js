/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { withStyles } from "@material-ui/styles"
import { CssBaseline } from "@material-ui/core"
// import "./layout.css"
import Footer from "./footer"

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
}

const Layout = ({ children, classes }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

 
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout)
