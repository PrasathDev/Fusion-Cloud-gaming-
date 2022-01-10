import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import {Button as Btn} from '@material-ui/core';
import {Accordion,Card,Button} from 'react-bootstrap'
import GameCards from './GameCards'
import {Link} from 'react-router-dom'


class FusionHome extends Component{

  render(){

    return (
      <div>
        <div className='homePg'>
          <div className='theCover'>
            <img src="https://widenews.org/wp-content/uploads/2017/07/Best-Games-Of-2013-Wallpaper.jpg" className='coverImg' alt='cover'></img>
            <div className="carousel-caption">
              <p className="fnt caption-head text-light">You Have Whatever it Takes!<br/></p><p className="fnt caption-sub text-light">Looking out for Cloud Gaming?<br/><br/> This is right place for you..</p><br/>
              <div className="btn-cntrl" onClick={()=>{
                console.log('Fine')
              }}>
              <Btn variant="outlined" size='medium' style={{ maxWidth: '100%', maxHeight: '15%', minWidth: '50%', minHeight: '5%',backgroundImage: "linear-gradient(to right, #EC9F05, #FF4E00)", color: 'white',fontFamily: 'Poppins, sans-serif',fontWeight: '900'}}>
                <Link to='/join' style={{textDecoration: 'none'}}><h3 className="mt-2 fnt sub-sub">&emsp;&emsp;&emsp;Join Fusion&emsp;&emsp;&emsp;</h3></Link>
              </Btn>
              </div>
              <p className="fnt cap-msg font-weight-light text-light"><br/>* Rs. 399/Month after Trial.You Can Cancel at any Time<br/></p><br/>
            </div>
          </div>
        </div>
        <div className="fusionFeatures">
          <h1 className="fnt p-3 sub-head text-dark"><br/><br/>Play Any Games on <br/>Any Devices With Fusion<br/></h1>
          <p className="fnt sub-sub text-dark">Give a Try on our Exclusive Games. Convert Your Old Devices into <br/>A <b>Ultimate Gaming Console</b> with Fusion<br/><small className="note">* Requires a Minimum Bandwidth Speed of 10Mbps</small><br/><br/></p>
          <h1 className="fnt a-c text-dark">Fusion Exclusive Games<br/><span className="fnt text-dark sub-sub">(Exclusive for Fusion Members)<br/>Most entertained games in our fusion..</span></h1>
        </div>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          <GameCards/>
      </div>
      <div className='d-flex justify-content-center'>
          <Btn className="fnt" variant="contained" style={{backgroundImage: "linear-gradient(to right, #EC9F05, #FF4E00)", color: 'white'}}>
          <Link to='/browse' style={{textDecoration: 'none'}} className='fnt text-light'>Show All Games </Link>
          </Btn>
      </div>
    
      <div className='mx-auto p-5' style={{width: '70%'}}>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle className='fnt text-dark' as={Button} variant="link" eventKey="0">
              What is Fusion?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className='fnt text-dark ml-3'>Fusion is a Cloud Gaming Platform, Build to play Games around All Screens</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className='fnt text-dark' as={Button} variant="link" eventKey="1">
              <div className='mx-auto'>
                What do i Need to play in Fusion?
              </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className='fnt text-dark ml-3'>To play Games in Fuion, You need Atleast Network Speed of 10Mbps</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </div>
      </div>
    );
  }
}

export default FusionHome;