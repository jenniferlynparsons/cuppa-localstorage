/* eslint-disable no-console */
import React from "react";

class TeaDetails extends React.Component {
  state = {
    id: "",
    name: "",
    brand: "",
    type: "",
    servings: ""
  };

  componentDidMount() {
    const theTea = this.props.getDetails(this.props.id);
    this.setState(theTea[0]);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.state.id !== prevProps.id) {
      const theTea = this.props.getDetails(this.props.id);
      this.setState(theTea[0]);
    }
  }
  render() {
    return (
      <div className="container content">
        <h1>{this.state.name}</h1>
        <ul>
          <li>
            <span className="has-text-grey-light">Brand:</span>{" "}
            {this.state.brand}
          </li>
          <li>
            <span className="has-text-grey-light">Type:</span> {this.state.type}
          </li>
          <li>
            <span className="has-text-grey-light">Servings:</span>{" "}
            {this.state.servings}
          </li>
        </ul>
      </div>
    );
  }
}

export default TeaDetails;
