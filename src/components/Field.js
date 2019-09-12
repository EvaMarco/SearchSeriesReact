import React  from 'react';
import PropTypes from 'prop-types';

class Field extends React.Component {
  render(){
    return(
      <React.Fragment>
        <label htmlFor="search"> {this.props.textoEtiqueta}
          </label>
        <input 
          value = {this.props.userInput}
          name = "search" 
          type="text" 
          id = "search" 
          placeholder = {this.props.textoInput}
          onChange = {this.props.getUserText}
        />
      </React.Fragment>
    )
  }
}

Field.propTypes = {
  textoInput : PropTypes.string.isRequired,
  textoEtiqueta : PropTypes.string.isRequired,
  getUserText: PropTypes.func.isRequired
}
export default Field