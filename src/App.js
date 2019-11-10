import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

//Page
import Login from './pages/Login.jsx'
import DashBorad from './pages/Dashborad.jsx'

class App extends React.Component  {
  
  constructor(props) {
    super(props)
    this.state = { 
    }
  }

  render() {
    return (
      // <div>
      //   <Login></Login>
      // </div>
      <div className="App h-100">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/>
      <div className='h-100'>
        <Route path="/" component={DashBorad} exact/>
        {/* <Route path="/" component={Login} exact/> */}
      </div>
    </div>
    );
  }
}

export default App;
