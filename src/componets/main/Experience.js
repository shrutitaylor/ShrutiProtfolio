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
          orientation={this.props.orientation}
          value={value}
          onChange={this.handleChange}
          aria-label="simple tabs example"
          className="jss93"
          variant="scrollable"
          scrollButtons="auto"
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
            label="Ibps Gmbh"
            id="vertical-tab-2"
            aria-controls="vertical-tabpanel-2"
          />
          <Tab
            label="Ibps Gmbh"
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
          <h3>
            <span>Junior Front End Developer</span>
            <span className="company">
              &nbsp;@&nbsp;
              <a
                href="https://www.nexern.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-link"
              >
                Nexern Gmbh
              </a>
            </span>
          </h3>
          <p className="timeline">Jul 2016 - Mar 2018</p>

          <ul className="company-jobs">
            <li>Searched and fixed small errors in CSS.</li>
            <li>Updated the new elements for the new content.</li>
            <li>Using Dev Tools on Chrome and Firefox for fixing bugs.</li>
            <li>Updated and created the new PHP scripts.</li>
            <li>Worked closely with designers, creating great interfaces.</li>
            <li>Worked extensively with Javascript, HTML5 and CSS3.</li>
          </ul>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <h3>
            <span>Junior Front-end Developer</span>
            <span className="company">
              &nbsp;@&nbsp;
              <span className="inline-link">Ibps Gmbh</span>
            </span>
          </h3>
          <p className="timeline">Nov 2015 - Jun 2016</p>

          <ul className="company-jobs">
            <li>
              Creating layouts in Photoshop and turning them into working
              websites
            </li>
            <li>Creating flavicon icon designs.</li>
            <li>Using Dev Tools on Chrome and Firefox for fixing bugs.</li>
            <li>Creating 3D effects and animations with CSS3.</li>
            <li>
              Manually tested sites in various browsers and mobile devices to
              ensure responsiveness
            </li>
          </ul>
        </TabPanel>
      </div>
    );
  }
}

export default Experience;
