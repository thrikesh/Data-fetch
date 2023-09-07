import React, { Component } from 'react'

class CounterComponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count : 0
        }
      }

    increaseFunction = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }

    decreaseFunction = () =>{
        this.setState({
            count : this.state.count - 1
        })
    }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.increaseFunction}> + </button>
        {this.state.count}
        <button onClick={this.decreaseFunction}> - </button>
      </React.Fragment>
    )
  }
}

export default CounterComponent




