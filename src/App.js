import React from 'react';
import Login from './pages/Login.jsx'
import './App.css';

class App extends React.Component  {
  
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Login></Login>
      </div>
    );
  }
}

export default App;
