import React  from 'react';
import PropTypes from 'prop-types';

const Button = (props) => <button> {props.textoBoton} </button>;

Button.propTypes = {
  textoBoton : PropTypes.string.isRequired,
}

export default Button;