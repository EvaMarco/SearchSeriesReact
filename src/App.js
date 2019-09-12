import React from 'react';
import Search from './components/Search';
import Result from './components/Result';
import Favs from './components/Favs';
import './scss/main.scss';

const buttonText = 'Buscar';
const inputText = 'Nombre de Serie';
const labelText = 'Busca tu serie favorita.';
const endpoint = 'https://api.tvmaze.com/search/shows?q=';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.getUserText = this.getUserText.bind(this);
        this.printButtonContent = this.printButtonContent.bind(this);
        this.getFavId = this.getFavId.bind(this);
        this.state = {
          counter: 0,
          input: 'Dora',
          api: []
        }
    }
    getUserText(event) {
      const value = event.currentTarget.value
        this.setState({
          input : value
        })
    }
    printButtonContent() {
        fetch(endpoint + this.state.input)
            .then(res => res.json())
            .then(data => {
                this.setState({
                  api: data
                });
            });
    }
    getFavId(event){
        const favId = event.currentTarget.id;
        console.log(favId);
    }

    render() {
        return (
            <div className="App">
                <h1> Mis series favoritas</h1>
                <Search
                    userInput = {this.state.input}
                    textoBoton={buttonText}
                    textoInput={inputText}
                    textoEtiqueta={labelText}
                    btnAction={this.printButtonContent}
                    getUserText={this.getUserText}
                />
                <div className='app__content'>
                    <Favs />
                    <Result
                        getFavId = {this.getFavId}
                        data={this.state.api}
                    />
                </div>

            </div>
        );
    }
}

export default App;
