import React,{Component} from 'react'
import {Navbar} from 'react-bootstrap'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button as Btn} from '@material-ui/core';
import '../App.css'
import ACVallhalla from './ACValhalla'
import WatchDogs3 from './WatchDogs3'
import ForzaHorizon4 from './ForzaHorizon'
import Cyberpunk2077 from './Cyberpunk'
import BrowseGames from './BrowseGames'
import FusionAccount from './Login'
import FusionHome from './Home'
import JoinFusion from './Join';
import BuyNow from './BuyNow';

class FusionNav extends Component{
    constructor(props){
        super(props)
        this.state = {
            isTop: true,
            isLoggedIn: false
        }
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 300;
          if (isTop !== this.state.isTop) {
            this.onScroll(isTop);
          }
        });
    }
    
    onScroll(isTop) {
        this.setState({ isTop });
    }

    render(){
        return(
        <Router>  
        <Route path='/' exact component={FusionHome}></Route>  
        <Route path='/browse' exact component={BrowseGames}></Route>
        <Route path='/account' exact component={FusionAccount}></Route>
        <Route exact path='/game/Cyberpunk2077' component={Cyberpunk2077} />
        <Route exact path='/buy' component={BuyNow}></Route>
        <Route exact path='/game/ACVallhalla' component={ACVallhalla}/>
        <Route exact path='/game/forzahorizon4' component={ForzaHorizon4}/>
        <Route exact path='/game/watchdogs3' component={WatchDogs3}/>
        <Route exact path='/join' component={JoinFusion}/>
        <Navbar variant={this.state.isTop?'light':'dark'} bg={this.state.isTop?'':'white'} expand='sm' fixed="top">
          <Navbar.Brand className={this.state.isTop ?"fnt text-light":"fnt text-dark"} href="/">
            <img
              src="https://media.moddb.com/images/articles/1/283/282045/fso_fusion-shift-logo_symbol-cir.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{' '}
            Fusion
          </Navbar.Brand>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item text-center">
            <Link to='/' className={this.state.isTop ?"nav-link fnt text-light":"nav-link fnt text-dark"}>About Fusion</Link>
            </li>
            <li className="nav-item text-center">
              <Link to='/browse' className={this.state.isTop ?"nav-link fnt text-light":"nav-link fnt text-dark"}>Games</Link>
            </li>
          </ul>          
            {this.state.isLoggedIn?
              <Btn className="fnt" variant="contained" style={{backgroundImage: "linear-gradient(to right, #EC9F05, #FF4E00)", color: 'white'}}>
                  My Account
              </Btn>
              :
              <Btn className="fnt" variant="contained" style={{backgroundImage: "linear-gradient(to right, #EC9F05, #FF4E00)", color: 'white'}}>
                  <Link to='/account' className={this.state.isTop ?"fnt text-light":"fnt text-dark"} >Account</Link> 
              </Btn>
            }
        </Navbar>
        </Router>
        );
    }
}

export default FusionNav