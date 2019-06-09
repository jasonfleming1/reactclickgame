//================ IMPORT ================

import React, { Component } from 'react';
import princesses from "./princesses.json";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

//================ FUNCTIONALITY  ================

// setting this.state.data to the data json array
class App extends Component {
  state = {
    princesses
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
