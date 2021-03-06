import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

var Stopwatch = React.createClass({
  getInitialState: function(){
    return { secondsElapsed: 0 };
  },
  getSeconds: function () {
    return ('0' + this.state.secondsElapsed % 60).slice(-2);
  },
  getMinutes: function () {
    return Math.floor(this.state.secondsElapsed / 60);
  },
handleStartClick: function () {
  var _this = this;

  this.incrementer = setInterval(function (){
    _this.setState({
      secondsElapsed:
    (_this.state.secondsElapsed + 1)
    });
  }, 1000)
},
handleStopClick: function () {
  clearInterval(this.incrementer);
},
  render: function (){
    return <div>
    <h1>{this.getMinutes()}:{this.getSeconds()}</h1>
      <button type="button" onClick={this.handleStartClick}>start</button>
      <button type="button" onClick={this.handleStopClick}>stop</button>
  </div>
}
});

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);
