import React, { Component } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const value = this.state.value;
    return (
      <div className="jss92" id={this.props.id}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={this.handleChange}
          aria-label="simple tabs example"
          className="jss93"
        >
          <Tab
            label="Item One"
            id="vertical-tab-0"
            aria-controls="vertical-tabpanel-0"
          />
          <Tab
            label="Item Two"
            id="vertical-tab-1"
            aria-controls="vertical-tabpanel-1"
          />
          <Tab
            label="Item Three"
            id="vertical-tab-2"
            aria-controls="vertical-tabpanel-2"
          />
        </Tabs>

        <TabPanel value={value} index={0}>
          Content One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Content Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Content Three
        </TabPanel>
      </div>
    );
  }
}

export default Experience;
