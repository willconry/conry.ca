import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AppBar, Container, CssBaseline, Toolbar, Typography } from "@material-ui/core"

const Header = ({ siteTitle }) => (

  <div>
  <CssBaseline />
  <AppBar>
    <Container maxWidth="md">
      <Toolbar>
        <Typography variant="h4" component="h1">
            {siteTitle}
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
  </div>

  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header