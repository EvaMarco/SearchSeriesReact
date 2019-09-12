import React  from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
  render(){
    return(
      <div className="app__results">
        <ul>
          {this.props.data
            // .filter(item => item.show.id%2 === 0)
            .map((result, index) => {
            let defaultImage = 'https://placehold.it/300x200/?text=TV';
            return(
              <li key={result.show.id} id={result.show.id} onClick = {this.props.getFavId}>
                <h2>{result.show.name}</h2>
                <img
                  src={(result.show.image !== null) ? result.show.image.medium : defaultImage} alt={result.show.name} 
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

Result.propTypes = {
  getFavId: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
}
export default Result