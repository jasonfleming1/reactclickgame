//================ IMPORT ================

import React, { Component } from 'react';
import princesses from "./princesses.json";
import Footer from "./components/Footer"

//================ FUNCTIONALITY  ================

// setting this.state.data to the data json array
class App extends Component {
  state = {
    princesses
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
