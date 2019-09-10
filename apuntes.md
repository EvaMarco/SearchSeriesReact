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
