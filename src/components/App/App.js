/* eslint-disable no-console */
import React from "react";
// import { Router } from "@reach/router";
import NavBar from "../NavBar";
import Tea from "../Tea";
import TeaList from "../TeaList";
import Footer from "../Footer";
import "../../common_styles/global.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teas: [
        {
          id: 1,
          name: "Test tea",
          quantity: 7
        }
      ],
      types: ["Black", "Green", "White"],
      handleNameChange: this.handleNameChange,
      handleBrandChange: this.handleBrandChange,
      handleTypeChange: this.handleTypeChange,
      handleServingsChange: this.handleServingsChange,
      handleFormSubmit: this.handleFormSubmit
    };
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleBrandChange = event => {
    this.setState({
      brand: event.target.value
    });
  };

  handleTypeChange = event => {
    this.setState({
      type: event.target.value
    });
  };

  handleServingsChange = event => {
    this.setState({
      servings: event.target.value
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <main>
          <Tea {...this.state} />
          <TeaList {...this.state} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
