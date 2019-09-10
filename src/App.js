import React from 'react';
import Search from './components/Search';
import Result from './components/Result';
import Favs from './components/Favs';

const buttonText = 'Buscar';
const inputText = 'Nombre de Serie';
const labelText = 'Busca tu serie favorita.';
const endpoint = 'https://api.tvmaze.com/search/shows?q=';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.getUserText = this.getUserText.bind(this);
        this.printButtonContent = this.printButtonContent.bind(this);
        this.state = {
          counter: 0,
          input: '',
          api: []
        }
    }
    getUserText(event) {

      const value = event.currentTarget.value
        console.log(event.currentTarget.value);
        this.setState({
          input : value
        })
    }
    printButtonContent() {
        fetch(endpoint + this.state.input)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                  api: data
                });
            });

    }
    render() {
        return (
            <div className="App">
                <h1> Mis series favoritas</h1>
                <Search
                    textoBoton={buttonText}
                    textoInput={inputText}
                    textoEtiqueta={labelText}
                    btnAction={this.printButtonContent}
                    getUserText={this.getUserText}
                />
                <Favs />
                <Result
                    data={this.state.api}
                />

            </div>
        );
    }
}

export default App;
