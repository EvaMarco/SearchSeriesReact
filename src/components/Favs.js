import React  from 'react';
import PropTypes from 'prop-types';

class Favs extends React.Component {
  render(){
    return(
      <div className="app__favs">
        <h2>Favoritos</h2>
        {this.props.favs.length<1 && <p>No tienes ningún favorito</p>}
        <ul className="favs__list">
          {this.props.favs
            .map((fav) => {
            let defaultImage = 'https://placehold.it/300x200/?text=TV';
            return(
              <li key = {fav.show.id} id = {fav.show.id}>
                <h2>{fav.show.name}</h2>
                <img
                  src={(fav.show.image !== null) ? fav.show.image.medium : defaultImage} alt={fav.show.name} 
                />
              </li>
              );
            })
          }
        </ul>
      </div>
    )
  }
}
Favs.propTypes = {
  favs: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default Favs