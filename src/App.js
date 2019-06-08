//================ IMPORT ================

import React, { Component } from 'react';
import data from "./data.json";
import Wrapper from "./components/Wrapper";
import Clicker from "./components/Clicker";
import Nav from "./components/Nav";

//================ FUNCTIONALITY  ================

// setting this.state.data to the data json array
class App extends Component {
  state = {
    data
  }

  render() {
    return (
      <Wrapper>
        <Nav>Princess Clicker</Nav>
        {this.state.data.map(data => (
          <Clicker
            id={data.id}
            image={data.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
