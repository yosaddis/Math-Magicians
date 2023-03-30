import React, { Component } from 'react';
import './Calculator.css';

export default class Calculator extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="result-display" />
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-zero">0</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-dot">.</button>
        <button type="button" onClick={this.btnOnClickResult} className="btn-ops btn-equal">=</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-clear">AC</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-toogle-sign">+/-</button>
        <button type="button" onClick={this.btnOnClick} className="btn-light btn-percentage">%</button>
        <button type="button" onClick={this.btnOnClick} className="btn-ops btn-divider">/</button>
        <button type="button" onClick={this.btnOnClick} className="btn-ops btn-multiply">*</button>
        <button type="button" onClick={this.btnOnClick} className="btn-ops btn-substract">-</button>
        <button type="button" onClick={this.btnOnClick} className="btn-ops btn-plus">+</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-one">1</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-two">2</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-three">3</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-four">4</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-five">5</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-six">6</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-seven">7</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-eight">8</button>
        <button type="button" onClick={this.btnOnClickOperator} className="btn-light btn-nine">9</button>
      </div>
    );
  }
}
