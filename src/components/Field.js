import React  from 'react';
import PropTypes from 'prop-types';

class Field extends React.Component {
  render(){
    return(
      <React.Fragment>
        <label htmlFor="search"> {this.props.textoEtiqueta}
          </label>
        <input 
          name = "search" 
          type="text" 
          id = "search" 
          placeholder = {this.props.textoInput}
        />
      </React.Fragment>
    )
  }
}

Field.propTypes = {
  textoInput : PropTypes.string.isRequired,
  textoEtiqueta : PropTypes.string
}
export default Field