import React, { Component } from 'react'

export class GoodMorningComponent extends Component {
  render() {
    return (
      <p>GoodMorningComponent, {this.props.name}</p>
    )
  }
}

export default GoodMorningComponent