/* eslint-disable no-console */
import React from "react";

class TeaEditor extends React.Component {
  render() {
    return (
      <section>
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="name">
            Tea Name
            <input
              id="name"
              onChange={this.props.handleNameChange}
              value={this.props.tea.name}
              placeholder="Tea Name"
            />
          </label>
          <label htmlFor="brand">
            Tea Brand
            <input
              id="brand"
              onChange={this.props.handleBrandChange}
              value={this.props.tea.brand}
              placeholder="Tea Brand"
            />
          </label>
          <label htmlFor="type">
            Type
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
          </label>
          <label htmlFor="servings">
            Servings Available
            <input
              id="servings"
              onChange={this.props.handleServingsChange}
              value={this.props.tea.servings}
              placeholder="Servings Available"
            />
          </label>
          <button>Submit</button>
        </form>
      </section>
    );
  }
}

export default TeaEditor;
