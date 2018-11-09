/* eslint-disable no-console */
import React from "react";
import uuidv4 from "uuid/v4";
import { Router } from "@reach/router";
import { Provider as ReduxProvider } from "react-redux";
import { saveTeas, loadTeas } from "../../storage";
import { Props, State } from "../../interfaces";
import store from "../../store";
import NavBar from "../NavBar";
import TeaEditor from "../TeaEditor";
import TeaList from "../TeaList";
import TeaDetails from "../TeaDetails";
import Footer from "../Footer";
import "../../../node_modules/bulma/bulma.sass";
import "../../common_styles/global.scss";

class App extends React.Component<Props, State> {
  constructor(props: Props) {
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
      id: "",
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

  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      tea: { ...this.state.tea, name: event.target.value }
    });
  };

  handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      tea: { ...this.state.tea, brand: event.target.value }
    });
  };

  handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      tea: { ...this.state.tea, type: event.target.value }
    });
  };

  handleServingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      tea: { ...this.state.tea, servings: event.target.value }
    });
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTeaList = [
      ...this.state.teas,
      { ...this.state.tea, id: uuidv4() }
    ];
    saveTeas(newTeaList);
    this.setState({ teas: loadTeas() });
  };

  handleDelete = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const removeTea = this.state.teas.filter(tea => tea.id !== teaItem);
    console.log("delete triggered ", event);
    saveTeas(removeTea);
    this.setState({ teas: loadTeas() });
  };

  getDetails = (teaID: string) => {
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
          <ReduxProvider store={store}>
            <Router>
              <TeaList {...this.state} path="/" />
              <TeaEditor {...this.state} path="/new-tea" />
              <TeaDetails {...this.state} path="/tea/:id" />
            </Router>
          </ReduxProvider>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
