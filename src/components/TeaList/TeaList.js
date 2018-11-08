import React from "react";
import { Link } from "@reach/router";

class TeaList extends React.Component {
  render() {
    return (
      <section>
        <table>
          <thead>
            <tr>
              <td>Tea Name</td>
              <td>Quantity</td>
              <td />
              <td />
              <td />
            </tr>
          </thead>
          <tbody>
            {this.props.teas.map(tea => {
              return (
                <tr key={tea.id}>
                  <td>{tea.name}</td>
                  <td>{tea.servings}</td>
                  <td>
                    <Link to={"tea/" + tea.id}>Details</Link>
                  </td>
                  <td>
                    <a href="/">Edit</a>
                  </td>
                  <td>
                    <button
                      onClick={() => this.props.handleDelete(event, tea.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}

export default TeaList;
