import React, { Component } from 'react'

class Sliders extends Component {
  render () {
    return (
      <div className='sliders'>
        <input type='range' max={this.props.max} step={this.props.step} onInput={this.props.onInput} />
      </div>
    )
  }
}

export default Sliders
