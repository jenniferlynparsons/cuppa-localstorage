/* eslint-disable no-console */
import React from "react";
import uuidv4 from "uuid/v4";
import { connect } from "react-redux";
import { Props, State, Tea } from "../../interfaces";

class TeaEditor extends React.Component<Props, Tea> {
  state = {
    id: "",
    name: "",
    brand: "",
    type: "",
    servings: ""
  };

  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      name: event.target.value
    });
  };

  handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      brand: event.target.value
    });
  };

  handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      ...this.state,
      type: event.target.value
    });
  };

  handleServingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      servings: event.target.value
    });
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const newTeaList = [
    //   ...this.state.teas,
    //   { ...this.state.tea, id: uuidv4() }
    // ];
    // saveTeas(newTeaList);
  };

  render() {
    console.log(this.props.types);
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label htmlFor="name">
              Tea Name
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="name"
                  onChange={this.handleNameChange}
                  value={this.props.tea.name}
                  placeholder="Tea Name"
                />
              </div>
            </label>
          </div>
          <div className="field">
            <label htmlFor="brand">
              Tea Brand
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="brand"
                  onChange={this.handleBrandChange}
                  value={this.props.tea.brand}
                  placeholder="Tea Brand"
                />
              </div>
            </label>
          </div>
          <div className="field">
            <label htmlFor="type">
              Type
              <div className="control">
                <div className="select">
                  <select
                    disabled={!this.props.types.length}
                    id="type"
                    value={this.props.tea.type}
                    onChange={this.handleTypeChange}
                    onBlur={this.handleTypeChange}
                  >
                    <option />
                    {this.props.types.map(type => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </label>
          </div>
          <div className="field">
            <label htmlFor="servings">
              Servings Available
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="servings"
                  onChange={this.handleServingsChange}
                  value={this.props.tea.servings}
                  placeholder="Servings Available"
                />
              </div>
            </label>
          </div>
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  tea: state.teas,
  types: state.types
});

const mapDispatchToProps = () => ({
  handleSubmit: () => {
    dispatch("ADD_TEA");
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeaEditor);
