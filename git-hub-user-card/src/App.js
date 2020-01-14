import React, {Component} from 'react';
import Card from './Components/Card';
import './App.css';
import axios from 'axios';


class App extends Component{
  state={
    users: {}
  }

  componentDidMount(){
    axios
    .get('https://api.github.com/users/asahmed93')
    .then(res =>{
      this.setState({users: res.data})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Card data={this.state.users} />
      </div>
    );
  }
}

export default App;
