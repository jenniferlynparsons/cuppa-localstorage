/* eslint-disable no-console */
import React from "react";
import { Router } from "@reach/router";
import { saveTeas, loadTeas } from "../../storage";
import NavBar from "../NavBar";
import TeaEditor from "../TeaEditor";
import TeaList from "../TeaList";
import Footer from "../Footer";
import "../../common_styles/global.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tea: {
        name: "",
        brand: "",
        type: "",
        servings: ""
      },
      teas: [
        {
          name: "Darjeeling",
          brand: "Twinnings",
          type: "Black",
          servings: 7
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
      tea: { ...this.state.tea, name: event.target.value }
    });
  };

  handleBrandChange = event => {
    this.setState({
      tea: { ...this.state.tea, brand: event.target.value }
    });
  };

  handleTypeChange = event => {
    this.setState({
      tea: { ...this.state.tea, type: event.target.value }
    });
  };

  handleServingsChange = event => {
    this.setState({
      tea: { ...this.state.tea, servings: event.target.value }
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const newTea = [...this.state.teas, this.state.tea];
    saveTeas(newTea);
  };

  componentDidMount() {
    this.setState({ teas: loadTeas() });
  }

  render() {
    return (
      <div>
        <NavBar />
        <main>
          <Router>
            <TeaList {...this.state} path="/" />
            <TeaEditor {...this.state} path="/new-tea" />
          </Router>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
