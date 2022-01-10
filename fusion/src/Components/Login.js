import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import {Figure} from 'react-bootstrap'
import LoginCover from '../Assets/LoginCover.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import {Button as Btn} from '@material-ui/core';
 
// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DBURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STRGBKT,
  messagingSenderId: process.env.REACT_APP_MSGSNDR,
  appId: process.env.REACT_APP_APPID
};
firebase.initializeApp(config);
 
class FusionAccount extends React.Component {
  state = {
    isSignedIn: false
  };
 
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };
 
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
 
  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
            <div>
              <div className='theCover'>
                <Figure.Image src={LoginCover} width='100%' className="browserCover" alt='cover'></Figure.Image>
                <div className="carousel-caption p-5 mb-6">
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                    <br/>
                    <br/>
                    <h1 className="fnt caption-head">Login To Your Fusion Account<br/></h1>
                    <p className="fnt sub-sub">Login to Continue to your Account<br/><br/></p>
                </div>                
              </div>
            </div>
        </div>
      );
    }
    return (
      <div classname="my-auto">
          <div className='theCover'>
            <img src="https://widenews.org/wp-content/uploads/2017/07/Best-Games-Of-2013-Wallpaper.jpg" className='coverImg' alt='cover'></img>
            <div className="my-auto carousel-caption">
            <p className='text-center caption-head'><i>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</i></p>
            <div className='d-flex justify-content-center'>
          <Btn className="fnt" variant="contained" style={{backgroundImage: "linear-gradient(to right, #EC9F05, #FF4E00)", color: 'white'}}>
          <Nav.Link onClick={() => firebase.auth().signOut()}>Sign-out</Nav.Link>
          </Btn>
          </div>
          </div>
          </div>
      </div>
    );
  }
}

export default FusionAccount