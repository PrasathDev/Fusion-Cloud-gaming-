import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import FusionNav from './Components/Navbar';
// import BrowseGames from './Components/BrowseGames'

class App extends Component{

  render(){

    return (
      <div>
        <FusionNav/>
      </div>
    );
  }
}

export default App;
