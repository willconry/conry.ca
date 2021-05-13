import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import propTypes from "prop-types"
import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    paddingTop: "16px",
    paddingBottom: "16px",
  }
}

const Component = ({ classes }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <Container className={classes.root} maxWidth="md">
      <AppBar color="default" position="static">
        <Tabs
          // centered
          // indicatorColor="primary"
          onChange={handleChange}
          // textColor="primary"
          value={value}
          variant="fullWidth"
        >
            <Tab key="Projects" label="projects" />
            <Tab key="Resume" label="resume" />
        </Tabs>
      </AppBar>
    </Container>
    </>
  );
};

Component.propTypes = {
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Component)
