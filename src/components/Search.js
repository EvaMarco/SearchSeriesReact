import React  from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import Button from './Button';

class Search extends React.Component {
  render(){
    return(
      <div className="app__search">
        <Field 
          userInput={this.props.userInput}
          textoInput = {this.props.textoInput}
          textoEtiqueta = {this.props.textoEtiqueta}
          getUserText = {this.props.getUserText}
        />
        <Button textoBoton = {this.props.textoBoton} btnAction = {this.props.btnAction}/>
      </div>
    )
  }
}

Search.propTypes = {
  textoInput : PropTypes.string.isRequired,
  textoEtiqueta : PropTypes.string,
  textoBoton : PropTypes.string.isRequired,
  btnAction : PropTypes.func.isRequired,
  getUserText: PropTypes.func.isRequired
}

export default Search