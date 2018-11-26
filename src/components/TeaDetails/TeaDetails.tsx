/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";
import { State, Props, Tea } from "../../interfaces";
import { deleteTea } from "../../actions";

class TeaDetails extends React.Component<Props> {
  handleDeleteClick = (tea: Tea) => {
    this.props.handleDelete(tea);
  };
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
        <a href={"/edit-tea/" + this.props.tea.id} className="button">
          Edit
        </a>
        {/* <a
          className="button is-danger"
          onClick={() => this.handleDeleteClick(this.props.tea)}
        >
          Delete
        </a> */}
      </div>
    );
  }
}

const mapStateToProps = (state: State, ownProps: Tea) => ({
  tea: state.teas.find(tea => tea.id === ownProps.id)
});

const mapDispatchToProps = (dispatch: any) => ({
  handleDelete: (tea: any) => {
    dispatch(deleteTea(tea));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeaDetails);
