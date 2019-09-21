import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class TvShow extends React.Component {
  render(){
    console.log(this.props.param.match.params.id);
    const showID = parseInt(this.props.param.match.params.id);
    const result = this.props.data.find(item => item.show.id === showID);
    let defaultImage = 'https://placehold.it/200x300/?text=TV';
    console.log(result);
    return(
      <React.Fragment>
        <p> Tv Show</p>
        {/* <h2>{result.show.name}</h2>
        <img
          src={(result.show.image !== null) ? result.show.image.medium : defaultImage} alt={result.show.name} 
        /> */}
        <Link to = "/">
          Volver
        </Link>
      </React.Fragment>
    )
  }
}

TvShow.propTypes = {

}
export default TvShow