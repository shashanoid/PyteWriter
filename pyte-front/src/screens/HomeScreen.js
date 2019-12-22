import React from "react";
import "./styles/rootStyle.css";
import CreatePyteScreen from "./CreatePyteScreen";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      renderCreatePyte: false
    };
  }

  handleInput = event => {
    var pyteInputLength = document.getElementById("pyteInputBox").value.length;
    if (event.key === "Enter") {
      this.renderCreatePyte();
      console.log("Render Pyte Create");
    }

    if (pyteInputLength === 0 && event.key === "e") {
      console.log("ESC key pressed");
    }
  };

  renderCreatePyte() {
    this.setState({ renderCreatePyte: true });
  }

  renderSavedPytes() {}

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    let { renderCreatePyte } = this.state;
    if (!renderCreatePyte) {
      return (
        <div className="homescreen-container">
          <div className="homescreen-content">
            <input
              id="pyteInputBox"
              type="text"
              placeholder="Title"
              autoFocus={true}
              onKeyPress={this.handleInput}
            />
            <p className="homescreen-tag">
              Press <b> e </b> to browse old pytes
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <CreatePyteScreen />
        </div>
      );
    }
  }
}

export default HomeScreen;
