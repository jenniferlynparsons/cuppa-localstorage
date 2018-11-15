/* eslint-disable no-console */
import React from "react";
import uuidv4 from "uuid/v4";
import { connect } from "react-redux";
import { Props, State, Tea } from "../../interfaces";
import { addTea, editTea } from "../../actions";

class TeaEditor extends React.Component<Props, Tea> {
  state = {
    id: "",
    name: "",
    brand: "",
    teaType: "",
    servings: "",
    edit: false
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
      teaType: event.target.value
    });
  };

  handleServingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      servings: event.target.value
    });
  };

  handleSubmitButton = () => {
    if (!this.state.id) {
      this.setState({
        ...this.state,
        id: uuidv4()
      });
    }
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({ ...this.state, edit: false });
  };

  componentDidMount() {
    if (this.props.id) {
      const filterTeas = this.props.teas.filter(t => t.id === this.props.id);
      const currentTea = { ...filterTeas[0] };
      this.setState({ ...currentTea });
    }
  }

  render() {
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
                  value={this.state.name}
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
                  value={this.state.brand}
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
                    disabled={!this.props.teaTypes.length}
                    id="type"
                    value={this.state.teaType}
                    onChange={this.handleTypeChange}
                    onBlur={this.handleTypeChange}
                  >
                    <option />
                    {this.props.teaTypes.map(type => (
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
                  value={this.state.servings}
                  placeholder="Servings Available"
                />
              </div>
            </label>
          </div>
          <div className="control">
            <button
              className="button is-primary"
              onClick={this.handleSubmitButton}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  teas: state.teas,
  teaTypes: state.teaTypes
});

const mapDispatchToProps = (dispatch: any) => ({
  handleSubmit: (tea: any) => {
    if (tea.edit === true) {
      dispatch(editTea(tea));
    } else {
      dispatch(addTea(tea));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeaEditor);
