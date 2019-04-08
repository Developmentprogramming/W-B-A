import React from 'react';

class Cmp extends React.Component {
  render() {
    return (
      <p id={this.props.id} onClick={() => {this.props.self.setState({currentCmp: this.props.cmp})}} >{this.props.cmp}</p>
    )
  }
}

export default Cmp;