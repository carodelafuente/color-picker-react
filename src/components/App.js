import React, { Component } from 'react'
import Swatch from './Swatch'
import Sliders from './Sliders'
import Values from './Values'

class App extends Component {
  state = {
    hue: Math.round(Math.random() * 360),
    saturation: 50,
    lightness: 50,
    alpha: 1
  }
  hueSlider = (event) => {
    this.setState({hue: event.target.value})
  }
  saturationSlider = (event) => {
    this.setState({saturation: event.target.value})
  }
  lightnessSlider = (event) => {
    this.setState({lightness: event.target.value})
  }
  alphaSlider = (event) => {
    this.setState({alpha: event.target.value})
  }

  render () {
    return <div className='box'>
      <h1> Color Picker </h1>
      <Swatch hue={this.state.hue} saturation={this.state.saturation} lightness={this.state.lightness} alpha={this.state.alpha} />
      <Values hue={this.state.hue} saturation={this.state.saturation} lightness={this.state.lightness} alpha={this.state.alpha} />
      <span>HUE</span>
      <Sliders min='0' max='360' onInput={this.hueSlider} />
      <span>SATURATION</span>
      <Sliders min='0' max='100' onInput={this.saturationSlider} />
      <span>LIGHTNESS</span>
      <Sliders min='0' max='100' onInput={this.lightnessSlider} />
      <span>ALPHA</span>
      <Sliders min='0' max='1' step='.01' onInput={this.alphaSlider} />
    </div>
  }
}

export default App
