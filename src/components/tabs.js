import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Component = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar color="default" position="static">
        <Tabs
          centered
          indicatorColor="primary"
          onChange={handleChange}
          textColor="primary"
          value={value}
          variant="fullWidth"
        >
            <Tab key="tab0" label="tab0" />
            <Tab key="tab1" label="tab1" />
        </Tabs>
      </AppBar>
      <p />
    </>
  );
};

export default Component;
