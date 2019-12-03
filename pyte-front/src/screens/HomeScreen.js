import React from "react";
import "./style.css";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homescreen-container">
        <div className="homescreen-content">
          <input type="text" placeholder="Title" autofocus="true"/>
          <p className="homescreen-tag">Press <b> esc </b> to browse old pytes</p>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
