import React, { Component } from 'react';
import fire from './config/fire'
import Login from './Login.js';
import Master from './Master.js';
import NavbarMenu from './Navbar.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div className="App">
        <NavbarMenu></NavbarMenu>
        <div>{this.state.user ? ( <Master/>) : (<Login />)}</div>
      </div>
    );
  }
}

export default App;