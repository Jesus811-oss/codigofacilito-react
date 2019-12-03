import React, {Component} from 'react';
import { render } from 'react-dom';

function MyComponent() {
  return <p>Sorry, ErrorType XD</p>;
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'React'
    }
  }

  render() {
      return (
        <div>
          <h1>Hello,React</h1>
          <MyComponent/>
        </div>);
  }
}
// Ejecutar React.js
render(<App/>, document.getElementById('root'));