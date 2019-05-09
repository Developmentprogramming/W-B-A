import React from 'react';
import './GateWay.css';
import Route from './Route/Route';

class GateWay extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'gateway',
    }
  }

  gateWayRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    let self = this;
    return (
      <Route gateWayRouteChange={this.gateWayRouteChange} self={self} />
    );
  }
}

export default GateWay;
