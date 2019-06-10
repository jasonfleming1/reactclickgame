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
    alert: "Click a princess to begin!",
    isCorrect: "",
    isClicked: [],
  }

  //Don't click the same princess twice!

  // componentDidMount | display and shuffle data
  componentDidMount(){
    this.setState({ data: this.shuffle(this.state.data)})
  }

  // shuffle data | https://www.frankmitchell.org/2015/01/fisher-yates/
  shuffle = data => {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i]
      data[i] = data[j];
      data[j] = temp;
    }
    return data;
  }

  // reset game | use .map (readme.6)
  resetGame = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.setState.score})
    }
      this.setState({isClicked: []})
      this.setState({score: 0})
      this.setState({isCorrect: ""})
      this.setState({alert: "Click a princess to begin!"})
    } // ==> end resetGame

  // handle alert | reply to user

  // handleClickEvent | 
    handleClickEvent = Card => {
      //alert("click 123") 
    }

  // handle correct guess | increment score

  // handle incorrect guess | 

  // hint: begin building a non-functioning static version then add interactions

  render() {
    return (
      <div>
        <Header alert={this.state.alert} score={this.state.score} highScore={this.state.highScore} />
        <Wrapper>
          {this.state.data.map(data => (
            <Card 
              key={data.id}
              id={data.id}
              image={data.image}
              handleClickEvent={this.handleClickEvent}
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