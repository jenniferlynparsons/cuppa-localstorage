import React from "react";
import { Link } from "@reach/router";
import { Props } from "../../interfaces";

class TeaList extends React.Component<Props, {}> {
  render() {
    return (
      <div className="container">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <td>Name</td>
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
                  <td>{tea.servings}</td>
                  <td>
                    <a href="/">Edit</a>
                  </td>
                  <td>
                    <button
                      className="button is-danger is-small"
                      onClick={this.props.handleDelete}
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

export default TeaList;
