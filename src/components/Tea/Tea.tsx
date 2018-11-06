import React from "react";

class Tea extends React.Component<{}, {}> {
  state = {
    name: "",
    brand: "",
    type: "",
    servings: ""
  };

  render() {
    return (
      <main>
        <form>
          <label htmlFor="name">
            Tea Name
            <input
              id="name"
              onChange={this.state.handleNameChange}
              value={this.state.name}
              placeholder="Tea Name"
            />
          </label>
          <label htmlFor="brand">
            Tea Brand
            <input
              id="brand"
              onChange={this.state.handleBrandChange}
              value={this.state.brand}
              placeholder="Tea Brand"
            />
          </label>
          <label htmlFor="type">
            Type
            <select
              disabled={!this.state.types.length}
              id="type"
              value={this.state.type}
              onChange={this.state.handleTypeChange}
              onBlur={this.state.handleTypeChange}
            >
              <option />
              {this.state.types.map(type => (
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
              onChange={this.state.handleServingsChange}
              value={this.state.servings}
              placeholder="Servings Available"
            />
          </label>
        </form>
      </main>
    );
  }
}

export default Tea;
