import React from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { Props, State } from "../../interfaces";
// import { saveTeas } from "../../storage";

class TeaList extends React.Component<Props> {
  // handleDelete = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   // const removeTea = this.props.teas.filter(tea => tea.id !== teaItem);
  //   console.log("delete triggered ", event);
  //   // saveTeas(removeTea);
  // };
  render() {
    // console.log("props ", this.props);
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
                      // onClick={this.handleDelete}
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
  teas: state.teas
});

export default connect(mapStateToProps)(TeaList);
