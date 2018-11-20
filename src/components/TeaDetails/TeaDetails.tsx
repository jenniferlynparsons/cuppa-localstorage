/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { State, Props, Tea } from "../../interfaces";
class TeaDetails extends React.Component<Props> {
  render() {
    return (
      <div className="container content">
        <h1>{this.props.tea.name}</h1>
        <ul>
          <li>
            <span className="has-text-grey-light">Brand:</span>{" "}
            {this.props.tea.brand}
          </li>
          <li>
            <span className="has-text-grey-light">Type:</span>{" "}
            {this.props.tea.teaType}
          </li>
          <li>
            <span className="has-text-grey-light">Servings:</span>{" "}
            {this.props.tea.servings}
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: State, ownProps: Tea) => ({
  tea: state.teas.find(tea => tea.id === ownProps.id)
});

export default connect(mapStateToProps)(TeaDetails);
