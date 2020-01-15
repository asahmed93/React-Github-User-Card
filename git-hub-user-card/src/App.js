import React, {Component} from 'react';
import Card from './Components/Card';
import Followers from './Components/Followers'
import './App.css';
import axios from 'axios';


class App extends Component{
  state={
    users: [],
    followers: [],
  }

  componentDidMount(){
    axios
    .get('https://api.github.com/users/asahmed93')
    .then(res =>{
      this.setState({users: res.data})
    })
    .catch(err => console.log(err))
    axios
    .get('https://api.github.com/users/asahmed93/followers')
    .then( res => {
      this.setState({ followers: res.data})
    })
  }
  render() {
    return (
      <div className="App">
        <Card data={this.state.users} />
        <Followers data={this.state.followers} />
      </div>
    );
  }
}

export default App;
