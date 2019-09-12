~~~~
  class App extends React.Component {
    constructor(props) {
        super(props);
        this.getUserText = this.getUserText.bind(this);
        this.printButtonContent = this.printButtonContent.bind(this);
        this.state = {
          counter: 0,
          input: '',
        }
    }
this.setState((prevState)=>{const newCounter = prevState.counter +1; return {counter: newCounter}})


this.setState({
  userInput:vaue
});
~~~~

Esto se usa cuando vamos a cambiar el contenido del setState pero que dependa del estado anterior. 

Si tenemos un objeto dentro de un objeto necesitamos, para acceder a las propiedades de 2º nivel, tendremos que hacer algo así.

~~~~
this.state = {
  name: 'Eva',
  obj:{
    key1:1,
    key2:2
  }
}
this.setState(prevState => {
  const newObj = {...prevState.obj, key1: 10}; return {obj:newObj}
})
~~~~