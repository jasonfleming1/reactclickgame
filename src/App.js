//================ IMPORT ================
import React, { Component } from 'react';
import data from "./data.json"; //princesses.json was too long
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";


//================ FUNCTIONALITY  ================

// data arrya | setting this.state.data 
class App extends Component {
  state = {
    data,
    score: 0,
    highScore: 0,
  };

// componentDidMount | display and shuffle data
  /*componentDidMount(){
    this.setState({ data: this.state.data})
  }*/

// shuffle data | https://www.frankmitchell.org/2015/01/fisher-yates/

// reset game | use .map (readme.6)

// handleClickEvent | 

// handle correct guess | increment score, set click: true

// handle incorrect guess | 

// hint: begin building a non-functioning static version then add interactions

  render() {
    return (
      <div>
        <Header />
        <Wrapper>
          {this.state.data.map(data => (
            <Card 
              key={data.id}
              id={data.id}
              image={data.image}
              />
          ))}
          </Wrapper>
        <Footer />
      </div>
    );
  }
}

//================ EXPORTS ================
export default App;