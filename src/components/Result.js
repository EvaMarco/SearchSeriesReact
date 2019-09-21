import React  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Result extends React.Component {
  isFav(id){
    const {favs} = this.props;
    const result = favs.findIndex(item => item.show.id === id);
    if(result < 0){
      return '';
    }
    else{
      return 'app__result-fav';
    }
  }
  render(){
    const {data, getFavId} = this.props;
    return(
      <div className="app__results">
        {!data.length && <p> Haz una búsqueda en el campo de arriba.</p>}
        <ul>
          {data
            .map((result) => {
              let defaultImage = 'https://placehold.it/200x300/?text=TV';
                return(
                  <li  className = {`app__result ${this.isFav(result.show.id)}`}key={result.show.id} id={result.show.id}>
                    <Link to ={`/tvshow/${result.show.id}`}>
                      <div>
                        <h2>{result.show.name}</h2>
                        <img
                          src={(result.show.image !== null) ? result.show.image.medium : defaultImage} alt={result.show.name} 
                        />
                      </div>
                    </Link>
                  </li>
                  );
                }
              ) 
            }
        </ul>
      </div>
    )
  }
}

Result.propTypes = {
  favs: PropTypes.arrayOf(PropTypes.object),
  getFavId: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
}
export default Result