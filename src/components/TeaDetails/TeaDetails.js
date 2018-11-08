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
      <section>
        <p>Tea Name: {this.state.name}</p>
        <p>Tea Brand: {this.state.brand}</p>
        <p>Type: {this.state.type}</p>
        <p>
          Servings Available:
          {this.state.servings}
        </p>
      </section>
    );
  }
}

export default TeaDetails;
