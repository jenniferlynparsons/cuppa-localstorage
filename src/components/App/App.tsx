/* eslint-disable no-console */
import React from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
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
      types: ["Black", "Green", "White"]
    };
  }

  // componentDidMount() {
  //   this.setState({ teas: loadTeas() });
  // }

  // tslint:disable-next-line:no-unused-expression
  // store.subscribe(()=>{
  //   saveTeas(store.getState())
  // })

  render() {
    return (
      <div>
        <NavBar />
        <section className="section">
          <Provider store={store}>
            <Router>
              <TeaList path="/" />
              <TeaEditor path="/new-tea" />
              <TeaDetails path="/tea/:id" />
            </Router>
          </Provider>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
