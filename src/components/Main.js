import React  from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Result from './Result';
import Favs from './Favs';

class Main extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Search
          userInput ={this.props.userInput}
          textoBoton ={this.props.textoBoton}
          textoInput ={this.props.textoInput}
          textoEtiqueta ={this.props.textoEtiqueta}
          btnAction ={this.props.btnAction}
          getUserText ={this.props.getUserText}
        />
        <div className='app__content'>
          <Favs
            favs = {this.props.favs}
            deleteFav = {this.props.deleteFav}
          />
          <Result
            getFavId = {this.props.getFavId}
            data = {this.props.data}
            favs = {this.props.favs}
          />
        </div>
      </React.Fragment>
    )
  }
}

Main.propTypes = {
  textoInput : PropTypes.string.isRequired,
  textoEtiqueta : PropTypes.string.isRequired,
  getUserText: PropTypes.func.isRequired,
  textoBoton : PropTypes.string.isRequired,
  btnAction : PropTypes.func.isRequired,
  favs: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteFav: PropTypes.func,
  getFavId: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
}
export default Main