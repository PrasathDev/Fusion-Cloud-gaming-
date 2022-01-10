import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Figure,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import firebase from 'firebase';
import {Link as Lnk} from 'react-scroll'
import {Button as Btn} from '@material-ui/core';


class ACVallhalla extends Component{

    constructor(props){
        super(props)
        this.state = ({
            title: '',
            cover: '',
            purchased: false
        })
    }

    componentDidMount(){
        try{
            this.setState({
                title: this.props.location.state.name,
                cover: this.props.location.state.cover
            })
        }
        catch(e){

        }
        const db = firebase.firestore()
        try{
            if(firebase.auth().currentUser.uid !== null){
                db.collection('Fusion').doc('Members').collection('Transaction').doc(firebase.auth().currentUser.uid).get().then((snapshot)=>{
                    if(snapshot.exists){
                        this.setState({
                            purchased: snapshot.data().cbp
                        })
                    }
                })
            }
        }
        catch(e){}
    }

    render(){
        return(
            <div className='bgDark'>
                <div className='bgDark'>
                    <Figure.Image src={this.state.cover} style={{width: '100%', flex: 1, resizeMode: 'contain'}} className="browserCover" alt='cover'></Figure.Image>
                    <div className="carousel-caption">
                        <p className="acv wd3-head text-light lineSpace">Assassin$<br/><span className='acv wd3-head'>¯¯¯creed¯¯¯</span><br/><span className='acv wd3-head' style={{letterSpacing:'40px'}}>valhalla</span></p><br/>
                    </div>
                    <div className='row justify-content-center mx-auto'>
                        <button className='btn acv-btn'>
                        <h3 className="acv btnSub text-dark mb-2" style={{fontSize: '19px',fontWeight: 'bold'}}><i className='fa fa-play-circle'></i>&emsp;&emsp;<Lnk to='trailer' spy={true} smooth={true}>Watch Trailer</Lnk>&emsp;&emsp;&emsp;</h3>
                        </button>
                        <button className='btn acv-btn'>
                            {this.state.purchased === false?
                        <h3 className="acv btnSub text-dark mt-2" style={{fontSize: '19px',fontWeight: 'bold'}}><i> </i>&emsp;&emsp;&emsp;<Lnk to='preOrder' spy={true} smooth={true}>Preorder Now</Lnk>&emsp;&emsp;&emsp;</h3>:
                        <h3 className="acv btnSub text-dark mt-2" style={{fontSize: '19px',fontWeight: 'bold'}}><i> </i>&emsp;&emsp;&emsp;<Lnk to='preOrder' spy={true} smooth={true}>You Purchased</Lnk>&emsp;&emsp;&emsp;</h3>                            
                        }
                        </button>
                    </div>
                </div>
                <div className='bgDark myRow justify-content-around'>
                    <Figure.Image src='https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-valhalla-screenshot-02-en-06jul20?$native$' className='p-5 ml-auto' style={{width: '60%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                    <h1 className='acv game-desc mx-auto text-light'>Play As Valhalla<br/> on All Screens</h1><br/><br/>
                </div>
                <div className='bgDark myRow justify-content-around'>
                    <div>
                        <h1 className='acv sub-head text-center' style={{color: 'yellow'}}>Computer</h1>
                        <h3 className='fnt sub-sub text-light overflow-hidden ml-5 text-center'>Requires a Web Browser,<br/> Keyboard, and Mouse or compactible controller</h3>
                    </div>
                    <div>
                        <h1 className='acv sub-head text-center' style={{color: 'yellow'}}>Android Devices</h1>
                        <h3 className='fnt sub-sub text-light overflow-hidden ml-5 text-center'>Requires Fusion App<br/> Android Version 6 (Marshmallow) Or Above</h3>
                    </div>
                    <div>
                        <h1 className='acv sub-head text-center' style={{color: 'yellow'}}>TV</h1>
                        <h3 className='fnt sub-sub text-light overflow-hidden ml-5 text-center'>Requires Chromecast in TV<br/> With a Suitable Gaming Controller </h3>
                    </div>
                </div>
                <br/>
                <br/>
                <hr style={{height: '1px', width: '80%', backgroundColor: 'grey'}}/>
                <div id='trailer' className='bgDark mx-auto mb-auto'>
                    <h3 className='text-center acv text-light caption-sub p-5' style={{fontWeight: 'bold', fontSize: '60px'}}>?<br/>Official Trailer</h3>
                    <iframe src={this.props.location.state.vid} className='row justify-content-center' width='1280' height='720' style={{marginLeft: '120px', marginBottom: '50px'}} allow='autoplay; encrypted-media' allowFullScreen title='video'/>
                </div>
                <hr style={{height: '1px', width: '80%', backgroundColor: 'grey'}}/>
                <div className='bgDark mt-auto'>
                    <h1 className='text-center acv text-light sub-head p-5' style={{fontWeight: 'bold', fontSize: '60px'}}>Game Screenshots</h1>
                    <Figure.Image src='https://image-cdn.essentiallysports.com/wp-content/uploads/20200713200524/EcwDo71WAAUt742-scaled.jpg' style={{width: '100%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                    <div className='myRow'>
                        <Figure.Image src='https://i2.wp.com/metro.co.uk/wp-content/uploads/2020/05/495115ea9462be02271.47377232-ACV_ka_Announce_AncasterFortress_200430_5pm_CET_Paris-Time-1655.jpg?quality=90&strip=all&zoom=1&resize=644%2C360&ssl=1' style={{width: '50%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                        <Figure.Image src='https://images.pushsquare.com/13aee5ea588a5/assassins-creed-valhalla-ps5-ps4-screenshots.900x.jpg' style={{width: '50%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                    </div>
                </div>
                <div id='preOrder' className='bg-light p-5'>
                    <div style={{backgroundImage: "linear-gradient(to right, #b3cdd1 0%, #9fa4c4 74%)", color: 'black',width: '100%',borderRadius: '15px'}} className='column'>
                        <div>
                            <h1 className='acv game-final pl-5 pt-5' style={{textTransform: 'uppercase'}}>Assassis Creed Valhalla<br/>is Ready For You</h1>
                            <br/>
                            <h3 className='fnt text-dark caption-sub pl-5 pb-5'>Buy Assassis Creed Valhalla Now for Exclusive In-Game Rewards</h3>
                            <h3 className='fnt text-dark caption-sub pl-5 pb-5'>Price: {this.props.location.state.price}</h3>
                            <Btn id='buy-link' disabled={this.state.purchased === false?false:true} className="fnt m-5 mt-auto " variant="contained" style={{backgroundImage: "linear-gradient(to right, #EC9F05, #FF4E00)", color: 'white'}}>
                                <Link to={{pathname:'/buy',state:{price: this.props.location.state.price,name: 'Assassins Creed: Valhalla',imgSml: this.props.location.state.imgSml}}} className={this.state.isTop ?"fnt text-light":"fnt text-dark"} >{this.state.purchased===false?'Buy Now':'You Purchased'}</Link> 
                            </Btn>
                        </div>
                    </div>
                </div>
                <div className='myRow'>
                    <div className='flex-grow-1 bg-light myRow p-5 footer'>
                        <Navbar.Brand className="fnt text-dark" href="/">
                            <img
                                src="https://media.moddb.com/images/articles/1/283/282045/fso_fusion-shift-logo_symbol-cir.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />{' '}
                            Fusion
                        </Navbar.Brand>
                        <ul className="myRow " style={{listStyleType: 'none'}}>
                            <li className="nav-item ml-3 text-center">
                            <Link to='/' className="nav-link fnt text-dark">About Fusion</Link>
                            </li>
                            <li className="nav-item mr-auto text-center">
                            <Link to='/browse' className="nav-link fnt text-dark">Games</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='bg-light myRow p-5 footer'>
                        <ul className="myRow " style={{listStyleType: 'none'}}>
                            <li className="nav-item mr-3 text-center">
                            <a href='https://blue-sky-weather.netlify.app' className="fnt text-dark">
                                <i class="lab la-github la-3x"></i>
                            </a>
                            </li>
                            <li className="nav-item mr-3 text-center">
                            <a href='https://blue-sky-weather.netlify.app' className="fnt text-dark">
                                <i class="lab la-twitter la-3x"></i>
                            </a>
                            </li>
                            <li className="nav-item mr-3 text-center">
                            <a href='https://blue-sky-weather.netlify.app' className="fnt text-dark">
                                <i class="lab la-instagram la-3x"></i>
                            </a>
                            </li>

                        </ul>
                    </div>                    
                </div>      
            </div>
        );
    }
}

export default ACVallhalla