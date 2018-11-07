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
              <td>Edit</td>
            </tr>
          </thead>
          <tbody>
            {this.props.teas.map(tea => {
              return (
                <tr key={tea.id}>
                  <td>{tea.name}</td>
                  <td>{tea.quantity}</td>
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
