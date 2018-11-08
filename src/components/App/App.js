/* eslint-disable no-console */
import React from "react";
import uuidv4 from "uuid/v4";
import { Router } from "@reach/router";
import { saveTeas, loadTeas } from "../../storage";
import NavBar from "../NavBar";
import TeaEditor from "../TeaEditor";
import TeaList from "../TeaList";
import TeaDetails from "../TeaDetails";
import Footer from "../Footer";
import "../../../node_modules/bulma/bulma.sass";
import "../../common_styles/global.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tea: {
        id: "",
        name: "",
        brand: "",
        type: "",
        servings: ""
      },
      teas: [
        {
          id: "",
          name: "",
          brand: "",
          type: "",
          servings: ""
        }
      ],
      types: ["Black", "Green", "White"],
      handleNameChange: this.handleNameChange,
      handleBrandChange: this.handleBrandChange,
      handleTypeChange: this.handleTypeChange,
      handleServingsChange: this.handleServingsChange,
      handleFormSubmit: this.handleFormSubmit,
      handleDelete: this.handleDelete,
      getDetails: this.getDetails
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

  handleFormSubmit = (event, teaItem) => {
    event.preventDefault();
    if (teaItem.id === "") {
      const newTeaList = [
        ...this.state.teas,
        { ...this.state.tea, id: uuidv4() }
      ];
      saveTeas(newTeaList);
    } else {
      const updatedTeaList = this.state.teas.map(item => {
        if (teaItem.id === item.id) {
          const updatedItem = this.state.tea;
          return updatedItem;
        } else {
          return item;
        }
      });
      saveTeas(updatedTeaList);
    }

    this.setState({ teas: loadTeas() });
  };

  handleDelete = (event, teaItem) => {
    event.preventDefault();
    const removeTea = this.state.teas.filter(tea => tea.id !== teaItem);
    saveTeas(removeTea);
    this.setState({ teas: loadTeas() });
  };

  getDetails = teaID => {
    return this.state.teas.filter(tea => tea.id === teaID);
  };

  componentDidMount() {
    this.setState({ teas: loadTeas() });
  }

  render() {
    return (
      <div>
        <NavBar />
        <section className="section">
          <Router>
            <TeaList {...this.state} path="/" />
            <TeaEditor {...this.state} path="/new-tea" key="add-tea" />
            <TeaEditor {...this.state} path="/edit-tea/:id" key="edit-tea" />
            <TeaDetails {...this.state} path="/tea/:id" />
          </Router>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
