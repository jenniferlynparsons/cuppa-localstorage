import React from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { Props, State, Tea } from "../../interfaces";
import { deleteTea } from "../../actions";

class TeaList extends React.Component<Props> {
  handleDeleteClick = (tea: Tea) => {
    this.props.handleDelete(tea);
  };

  render() {
    return (
      <div className="container">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <td>Name</td>
              <td>Brand</td>
              <td>Type</td>
              <td>Quantity</td>
              <td />
              <td />
            </tr>
          </thead>
          <tbody>
            {this.props.teas.map(tea => {
              return (
                <tr key={tea.id}>
                  <td>
                    <Link to={"tea/" + tea.id}>{tea.name}</Link>
                  </td>
                  <td>{tea.brand}</td>
                  <td>{tea.teaType}</td>
                  <td>{tea.servings}</td>
                  <td>
                    <a href={"/edit-tea/" + tea.id}>Edit</a>
                  </td>
                  <td>
                    <button
                      className="button is-danger is-small"
                      onClick={() => this.handleDeleteClick(tea)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  teas: state.teas,
  teaTypes: state.teaTypes
});

const mapDispatchToProps = (dispatch: any) => ({
  handleDelete: (tea: any) => {
    dispatch(deleteTea(tea));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeaList);
