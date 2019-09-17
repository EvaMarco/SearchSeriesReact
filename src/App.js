import React from 'react';
import Search from './components/Search';
import Result from './components/Result';
import Favs from './components/Favs';
import './scss/main.scss';
import {getSeries} from './services/get_series'

const buttonText = 'Buscar';
const inputText = 'Nombre de Serie';
const labelText = 'Busca tu serie favorita.';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getUserText = this.getUserText.bind(this);
    this.printButtonContent = this.printButtonContent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.getFavId = this.getFavId.bind(this);
    this.state = {
      counter: 0,
      input: 'Dora',
      api: [],
      favs: []
    }
  }

  componentDidMount(){
    this.getStoragedFavs()
  }
  getStoragedFavs (){
    const ls = JSON.parse(localStorage.getItem('favs'));
    if(ls !== null){
      this.setState ({
        favs : ls
      })
    }
  }
  getUserText(event) {
    const value = event.currentTarget.value
    this.setState({
      input: value
    })
  }
  printButtonContent() {
    getSeries(this.state.input)
      .then(data => {
        this.setState({
          api: data,
        });
      });
  }
  deleteEvent(event){
    const showId = parseInt(event.currentTarget.dataset.id);  
    this.setState(prevState => 
      {
        const newFavs = [...prevState.favs];
        const FavSerieIndex = newFavs.findIndex(item => item.show.id === showId);
        newFavs.splice(FavSerieIndex, 1);
        localStorage.setItem ('favs', JSON.stringify(newFavs));
        return {favs:newFavs};
      }
    );
  }
  getFavId(event) {
    const favId = parseInt(event.currentTarget.id);  
    const futureFav = this.state.api.find(item => item.show.id === favId);

    this.setState(prevState => 
      {
        const newFav = [...prevState.favs];
        const FavSerieIndex = newFav.findIndex(item => item.show.id === favId);
        if(FavSerieIndex  === -1){
          newFav.push(futureFav);
        }
        else{
          newFav.splice(FavSerieIndex, 1);
        }
        localStorage.setItem ('favs', JSON.stringify(newFav));
        return {favs:newFav};
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1> Mis series favoritas</h1>
        <Search
          userInput ={this.state.input}
          textoBoton ={buttonText}
          textoInput ={inputText}
          textoEtiqueta ={labelText}
          btnAction ={this.printButtonContent}
          getUserText ={this.getUserText}
        />
        <div className='app__content'>
          <Favs
            favs = {this.state.favs}
            deleteFav = {this.deleteEvent}
          />
          <Result
            getFavId = {this.getFavId}
            data = {this.state.api}
            favs = {this.state.favs}
          />
        </div>

      </div>
    );
  }
}

export default App;
