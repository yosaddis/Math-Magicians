import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    const { typeBtn, btnClass } = this.props;
    this.state = {
      nameBtn: typeBtn,
      btnClass,
    };
    this.btnOnClick = this.btnOnClick.bind(this);
  }

  // associating the button value with props
  btnOnClick(nameButton) {
    const { btnOnClick } = this.props;
    btnOnClick(nameButton);
  }

  // creating a button using native html
  render() {
    const { nameBtn, btnClass } = this.state;
    return <button type="button" className={btnClass} onClick={() => this.btnOnClick(nameBtn)}>{nameBtn}</button>;
  }
}

Button.propTypes = {
  typeBtn: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  btnOnClick: PropTypes.func,
};

Button.defaultProps = {
  btnClass: 'btn-light',
  btnOnClick: () => { },
};
