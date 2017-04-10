import React, { Component } from 'react'

class Swatch extends Component {
  render () {
    let color = `hsla(${this.props.hue}, ${this.props.saturation}%, ${this.props.lightness}%, ${this.props.alpha})`
    return (
      <div className='swatch' style={{ backgroundColor: color }} />
    )
  }
}

export default Swatch
