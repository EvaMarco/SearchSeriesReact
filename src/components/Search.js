import React  from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import Button from './Button';

class Search extends React.Component {
  render(){
    return(
      <div className="app__search">
        <h1>Mis series favoritas.</h1>
        <Field 
          textoInput = {this.props.textoInput}
          textoEtiqueta = {this.props.textoEtiqueta}
        />
        <Button textoBoton = {this.props.textoBoton}/>
      </div>
    )
  }
}

Search.propTypes = {
  textoInput : PropTypes.string.isRequired,
  textoEtiqueta : PropTypes.string,
  textoBoton : PropTypes.string.isRequired,
}

export default Search