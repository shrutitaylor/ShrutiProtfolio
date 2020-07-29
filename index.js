import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.video = React.createRef();
  }
  render() {
    return <h1>My Portfolio</h1>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
