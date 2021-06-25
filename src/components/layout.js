import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider, withStyles } from "@material-ui/styles"
import { Box, CssBaseline, Grid, Paper } from "@material-ui/core"
import Footer from "./footer"
import theme from "../styles/theme"

const styles = {
  root: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    // background: "#eee",
    // paddingTop: "94px",
    width: '100vw',
    height: '100vh',
    spacing: 0,
    justify: 'space-around'
  }
}

const Layout = ({ children, classes }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          contact {
            email
            github
          }
        }
      }
    }
  `)

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Grid alignItems="stretch" container justify="center" spacing={0}>
        <Grid item xs={12}>
            <Box className={classes.root} bgcolor="background.default">
                  <main>{children}</main>
              {/* <Footer email={data.site.siteMetadata.contact?.email}
                      github={data.site.siteMetadata.contact?.github} /> */}
            </Box>
        </Grid>
      </Grid>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout)