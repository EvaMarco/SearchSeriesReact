import React  from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render(){
    return (
      <button onClick = {this.props.btnAction}> {this.props.textoBoton} </button>
    )
  }
}

Button.propTypes = {
  btnAction : PropTypes.func.isRequired,
  textoBoton : PropTypes.string.isRequired
}

export default Button;