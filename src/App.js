import React, { Component } from 'react';
import './App.css';
import Route from './components/Route/Route';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'login',
      showBackButton: false
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
    if(route === 'register') {
      this.setState({showBackButton: true});
    } else if (route === 'login') {
      this.setState({showBackButton: false});
    } else {
      this.setState({showBackButton: false});
    }
  }

  render() {
    return (
      <Route route={this.state.route} onRouteChange={this.onRouteChange} showBackButton={this.state.showBackButton} />
    );
  }
}

export default App;
