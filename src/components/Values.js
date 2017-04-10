import React, { Component } from 'react'

class Values extends Component {
  render () {
    if (this.props.alpha < 1) {
      return <div>
        <div className='colorBar'>
          <span>{`hsla(${this.props.hue},
          ${this.props.saturation}%,
          ${this.props.lightness}%,
          ${this.props.alpha})`}
          </span>
        </div>
      </div>
    } else {
      return <div>
        <div className='colorBar'>
          <span>{`hsl(${this.props.hue},
          ${this.props.saturation}%,
          ${this.props.lightness}%)`}
          </span>
        </div>
      </div>
    }
  }
}

export default Values
