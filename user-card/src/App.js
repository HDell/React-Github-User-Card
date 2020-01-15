import React from 'react';
import axios from 'axios';
import CardList from './components/CardList';
import lambdalogo from './assets/lambdalogo.png';
import githublogo from './assets/githublogo.png';
import './App.css';


class App extends React.Component {

  state = {
    cards: []
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/HDell")
      .then((response) => {
        console.log(response);
        this.setState({
          cards: [...this.state.cards, response.data]
        });
      });

    axios.get("https://api.github.com/users/HDell/followers")
      .then((response) => {
        console.log(response);
        response.data.forEach((user) => {
          axios.get(user["url"])
            .then((response2) => {
              console.log(response2);
              this.setState({
                cards: [...this.state.cards, response2.data]
              });
            });
        });
      });
  }

  render() {

    return (
        <div className="container">
          <div className="header">
            <img src={lambdalogo} alt="Lambda Logo"/>
            <p>❤️'s</p>
            <img src={githublogo} alt="GitHub Logo"/>
          </div>
          <div className="cards">
            <CardList cards={this.state.cards}/>
          </div>
        </div>
    );
  }
}

export default App;
