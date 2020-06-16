import React from "react";
//import Data from "./data.json";
import Header from "./components/header/header";
import Main from "./components/main/main";
import "./scss/main.scss";

// const fileData = Data.map((obj) => {
//   const { id, name, address } = obj; //destructuring
//   return (
//     <h4 key={id}>
//       Hi, I am <img src={address} alt={name} /> and my name is {name}
//     </h4>
//   );
// });

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header>
            <Header />
          </header>

           
          <Main>

          </Main>
              
            </div>
        
      </React.Fragment>
    );
  }
}
