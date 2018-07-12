import React, { Component } from 'react';

class Wrap extends Component {
  constructor() {
    super();

    this.state = {
      date: new Date()
    }
  }


  render() {
    console.log(this.props.children);
    return (
      <div>
        <div>{this.props.children[0]}</div>
        <div>{this.props.children[1]}</div>
        <div>{this.props.children[2]}</div>
      </div>
    )
  }
}

export default Wrap;