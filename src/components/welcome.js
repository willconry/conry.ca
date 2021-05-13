import { Container, Typography } from '@material-ui/core'
import React from 'react'
import propTypes from "prop-types"
import { withStyles } from '@material-ui/styles'
import { useStaticQuery, graphql } from 'gatsby'


const styles = {
    root: {
      // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      // background: "#eee",
      paddingTop: "94px",
      paddingBottom: "47px",
    }
}

const Welcome = ({ classes }) => {

    const data = useStaticQuery(graphql`
        query TitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
        <Container className={classes.root} maxWidth="md">
            {/* <Box> */}
            <Typography variant="h4">
                The personal website of
            </Typography>
            <Typography variant="h1" align="center">
                {data.site.siteMetadata.title}
            </Typography>
            <Typography variant="h4" align="right">
                Welcome
            </Typography>
            {/* </Box> */}
        </Container>
        </>
    )
}

Welcome.propTypes = {
    classes: propTypes.object.isRequired,
}
  
export default withStyles(styles)(Welcome)