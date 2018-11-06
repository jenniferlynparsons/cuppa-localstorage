import React from "react";
import { Router } from "@reach/router";
import NavBar from "../NavBar";
import TeaList from "../TeaList";
import Tea from "../Tea";
import Footer from "../Footer";
import "bulma/css/bulma.css";
import "../../common_styles/global.scss";

interface State {
  name: string;
  brand: string;
  type: string;
  types: string[];
  servings: string;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBrandChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleServingsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getTypes: () => void;
}

class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      brand: "",
      type: "",
      types: [] as string[],
      servings: "",
      handleNameChange: this.handleNameChange,
      handleBrandChange: this.handleBrandChange,
      handleTypeChange: this.handleTypeChange,
      handleServingsChange: this.handleServingsChange,
      getTypes: this.getTypes
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <TeaList path={"/"} />
          <Tea path={"/add"} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
