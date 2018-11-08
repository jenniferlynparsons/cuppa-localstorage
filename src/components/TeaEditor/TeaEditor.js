/* eslint-disable no-console */
import React from "react";

class TeaEditor extends React.Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleFormSubmit}>
          <div className="field">
            <label htmlFor="name">
              Tea Name
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="name"
                  onChange={this.props.handleNameChange}
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
                  onChange={this.props.handleBrandChange}
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
                    onChange={this.props.handleTypeChange}
                    onBlur={this.props.handleTypeChange}
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
                  onChange={this.props.handleServingsChange}
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

export default TeaEditor;
