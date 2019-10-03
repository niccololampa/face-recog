import React, { Component } from 'react';
import './App.css';
import WebCamera from './components/web-camera/WebCamera';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { webcamEnabled: false };
    this.enableWebcam = this.switchWebcam.bind(this);
  }

  switchWebcam() {
    this.setState(state => ({
      webcamEnabled: !state.webcamEnabled
    }));
  }
  render() {
    return (
      <div className="App">
        {this.state.webcamEnabled && <WebCamera />}

        <button type="button" onClick={this.enableWebcam}>
          {this.state.webcamEnabled ? 'Disable' : 'Enable'} WebCamera
        </button>
      </div>
    );
  }
}
