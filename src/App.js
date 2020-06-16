import React from "react";
//import Data from "./data.json";
import Header from "./components/header/header";
import Main from "./components/main/main";
import "./scss/main.scss";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header>
            <Header />
          </header>

          <Main></Main>
        </div>
      </React.Fragment>
    );
  }
}
