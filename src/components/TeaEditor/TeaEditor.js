/* eslint-disable no-console */
import React from "react";

class TeaEditor extends React.Component {
  componentDidMount() {
    const theTea = this.props.getDetails(this.props.id);
    this.setState({ tea: theTea[0] });
  }

  componentDidUpdate(prevProps) {
    if (this.state.id !== prevProps.id) {
      const theTea = { tea: this.props.getDetails(this.props.id) };
      this.setState(theTea[0]);
    }
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={e => this.props.handleFormSubmit(e, this.state.tea)}>
          <div className="field">
            <label htmlFor="name">
              Tea Name
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="name"
                  onChange={this.props.handleNameChange}
                  value={
                    this.state.name === ""
                      ? this.props.tea.name
                      : this.state.tea.name
                  }
                  placeholder="Darjeeling"
                />
              </div>
            </label>
          </div>
          <div className="field">
            <label htmlFor="brand">
              Brand
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="brand"
                  onChange={this.props.handleBrandChange}
                  value={
                    this.state.brand === ""
                      ? this.props.tea.brand
                      : this.state.tea.brand
                  }
                  placeholder="Twinnings"
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
                    value={
                      this.state.type === ""
                        ? this.props.tea.type
                        : this.state.tea.type
                    }
                    onChange={this.props.handleTypeChange}
                    onBlur={this.props.handleTypeChange}
                  >
                    <option>Choose a Type</option>
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
                  onChange={this.props.handleServingsChange}
                  value={
                    this.state.servings === ""
                      ? this.props.tea.servings
                      : this.state.tea.servings
                  }
                  placeholder="24"
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

export default TeaEditor;
