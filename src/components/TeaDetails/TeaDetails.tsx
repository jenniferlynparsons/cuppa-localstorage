/* eslint-disable no-console */
import React from "react";
import { Props } from "../../interfaces";

interface State {
  tea: {
    id: string;
    name: string;
    brand: string;
    type: string;
    servings: string;
  };
}

class TeaDetails extends React.Component<Props, State> {
  state = {
    tea: {
      id: "",
      name: "",
      brand: "",
      type: "",
      servings: ""
    }
  };

  componentDidMount() {
    const theTea = this.props.getDetails(this.props.id);
    this.setState(theTea[0]);
  }

  componentDidUpdate(prevProps: object) {
    if (this.state.tea.id !== prevProps.id) {
      const theTea = this.props.getDetails(this.props.id);
      this.setState(theTea[0]);
    }
  }
  render() {
    return (
      <div className="container content">
        <h1>{this.state.tea.name}</h1>
        <ul>
          <li>
            <span className="has-text-grey-light">Brand:</span>{" "}
            {this.state.tea.brand}
          </li>
          <li>
            <span className="has-text-grey-light">Type:</span>{" "}
            {this.state.tea.type}
          </li>
          <li>
            <span className="has-text-grey-light">Servings:</span>{" "}
            {this.state.tea.servings}
          </li>
        </ul>
      </div>
    );
  }
}

export default TeaDetails;
