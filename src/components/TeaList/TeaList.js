import React from "react";

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
            </tr>
          </thead>
          <tbody>
            {this.props.teas.map(tea => {
              return (
                <tr key={tea.name + tea.brand}>
                  <td>{tea.name}</td>
                  <td>{tea.servings}</td>
                  <td>
                    <a href="/">Details</a>
                  </td>
                  <td>
                    <a href="/">Edit</a>
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
