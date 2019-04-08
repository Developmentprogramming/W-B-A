import React, { Component } from 'react';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NavigationBar from './components/NavigationBar/NavigationBar';
import NavigationBarHome from './components/Home/NavigationBar/NavigationBar';
import ToolBar from './components/Home/ToolBar/ToolBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'login',
      backButtonShow: false
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
    if (route === 'register') {
      this.setState({backButtonShow: true});
    } else if (route === 'login') {
      this.setState({backButtonShow: false});
    }
  }

  render() {
    if (this.state.route === 'login') {
      return (
        <div>
          <NavigationBar backButtonShow={this.state.backButtonShow} />
          <Login onRouteChange={this.onRouteChange} />
        </div>
      )
    } else if (this.state.route === 'register') {
      return (
        <div>
          <NavigationBar backButtonShow={this.state.backButtonShow} onRouteChange={this.onRouteChange} />
          <Register onRouteChange={this.onRouteChange} />
        </div>
      )
    } else {
      return (
        <div>
          <NavigationBarHome onRouteChange={this.onRouteChange} />
          <ToolBar />
        </div>
      )
    }
  }
}

export default App;
