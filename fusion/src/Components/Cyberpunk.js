import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Figure,Navbar} from 'react-bootstrap'
import firebase from 'firebase';
import {Button as Btn} from '@material-ui/core';
import {Link} from 'react-router-dom'
import {Link as Lnk} from 'react-scroll'

class Cyberpunk2077 extends Component{

    constructor(props){
        super(props)
        this.state = ({
            title: '',
            cover: '',
            show: true,
            purchased: false
        })
    }

    componentDidMount(){
        const db = firebase.firestore()
        try{
            this.setState({
                title: this.props.location.state.name,
                cover: this.props.location.state.cover
            })    
        }
        catch(e){

        }
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
                    <div className="card-img-overlay mt-5 mx-auto d-flex flex-column game ml-auto">
                        <span className='fnt caption-head mx-auto'>Play</span><br/>
                        <p className="game-head mt-5 mx-auto mb-auto h-300 ml-auto text-light mb-0"> {this.state.title} <span className='fnt caption-head'>Instantly on</span><br/></p><br/>
                        <span className='fnt hi mx-auto mb-auto h-100'>Fusion</span>
                    </div>
                    <div className='row justify-content-center mx-auto'>
                    <button className='btn cyber-btn' type='button'>
                    <h3 className="fnt btnSub text-dark"><i className='fa fa-play-circle'></i>&emsp;&emsp;<Lnk to='trailer' spy={true} smooth={true}>Watch Trailer</Lnk>&emsp;&emsp;&emsp;</h3>
                    </button>
                    <button className='btn cyber-btn'>
                        {this.state.purchased === false? 
                            <h3 className="fnt btnSub text-dark mt-2">&emsp;&emsp;&emsp;<Lnk to='preOrder' spy={true} smooth={true}>Preorder Now</Lnk>&emsp;&emsp;&emsp;</h3>:
                            <h3 className="fnt btnSub text-dark mt-2">&emsp;&emsp;&emsp;<Lnk to='preOrder' spy={true} smooth={true}>You Purchased</Lnk>&emsp;&emsp;&emsp;</h3>
                        }
                    </button>
                    </div>
                </div>
                <br/>
                <div className='bgDark'>
                    <Figure.Image src='https://www.gstatic.com/stadia/gamers/landing_pages/cobranded/6f147f371c174dc/static/images/card-steps/devices_2x.webp' style={{width: '100%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                    <h1 className='game game-desc text-light'>Play Cyberpunk 2077<br/> on All Screens</h1><br/><br/>
                </div>
                <div className='bgDark myRow justify-content-around'>
                    <div>
                        <h1 className='game sub-head text-center' style={{color: 'yellow'}}>Computer</h1>
                        <h3 className='fnt sub-sub text-light overflow-hidden ml-5 text-center'>Requires a Web Browser,<br/> Keyboard, and Mouse or compactible controller</h3>
                    </div>
                    <div>
                        <h1 className='game sub-head text-center' style={{color: 'yellow'}}>Android Devices</h1>
                        <h3 className='fnt sub-sub text-light overflow-hidden ml-5 text-center'>Requires Fusion App<br/> Android Version 6 (Marshmallow) Or Above</h3>
                    </div>
                    <div>
                        <h1 className='game sub-head text-center' style={{color: 'yellow'}}>TV</h1>
                        <h3 className='fnt sub-sub text-light overflow-hidden ml-5 text-center'>Requires Chromecast in TV<br/> With a Suitable Gaming Controller </h3>
                    </div>
                </div>
                <br/>
                <br/>
                <hr style={{height: '1px', width: '80%', backgroundColor: 'grey'}}/>
                <div id='trailer' className='bgDark mx-auto'>
                    <h3 className='text-center game caption-sub p-5' id='trailer'>Official Trailer</h3>
                    <iframe src={this.props.location.state.vid} className='row justify-content-center' width='1280' height='720' style={{marginLeft: '120px', marginBottom: '50px'}} allow='autoplay; encrypted-media' allowFullScreen title='video'/>
                </div>
                <hr style={{height: '1px', width: '80%', backgroundColor: 'grey'}}/>
                <div className='bgDark'>
                    <h1 className='text-center game sub-head p-5'>Game Screenshots</h1>
                    <Figure.Image src='https://www.guru3d.com/index.php?ct=news&action=file&id=32592' style={{width: '100%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                    <div className='myRow'>
                        <Figure.Image src='https://i.ytimg.com/vi/XoIra3fs5gw/maxresdefault.jpg' style={{width: '50%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                        <Figure.Image src='https://assets1.ignimgs.com/2019/08/27/punch-it-en-1566871767344.jpg' style={{width: '50%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                    </div>
                </div>
                <div id='preOrder' className='bg-light p-5'>
                    <div style={{backgroundColor: '#fcee09', width: '100%',borderRadius: '15px'}} className='column'>
                        <div>
                            <h1 className='game text-dark game-final pl-5 pt-5'>Cyberpunk 2077 is<br/> Ready For You</h1>
                            <br/>
                            <h3 className='fnt text-dark caption-sub pl-5 pb-5'>Buy Cyberpunk 2077 Now for Exclusive In-Game Rewards</h3>
                            <h3 className='fnt text-dark caption-sub pl-5 pb-5'>Price: {this.props.location.state.price}</h3>
                            <Btn disabled={this.state.purchased === false?false:true} id='buy-link' className="fnt m-5 mt-auto " variant="contained" style={{backgroundImage: "linear-gradient(to right, #EC9F05, #FF4E00)", color: 'white'}}>
                                <Link to={{pathname:'/buy',state:{price: this.props.location.state.price,name: 'Cyberpunk 2077',imgSml: this.props.location.state.imgSml}}} className={this.state.isTop ?"fnt text-light":"fnt text-dark"} >{this.state.purchased===false?'Buy Now':'You Purchased'}</Link> 
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

export default Cyberpunk2077