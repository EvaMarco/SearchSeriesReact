import React  from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
  render(){
    return(
      <div className="app__results">
        <ul>
          {this.props.data
            // .filter(item => item.show.id%2 === 0)
            .map(result => {
              let defaultImage = 'https://placehold.it/300x200/?text=TV';
              // if(result.show.image !== null){
              //   image = result.show.image.medium;
              // }
              return(
                <li key={result.show.id}>
                  <h2>{result.show.name}</h2>
                  <img 
                  src = {(result.show.image !== null) ? result.show.image.medium :defaultImage} 
                  alt = {result.show.name}/>
                </li>
              );
          })}
        </ul>
      </div>
    )
  }
}

Result.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}
export default Result