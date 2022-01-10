import React,{Component} from 'react'
import {Figure,Navbar} from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import {Link as Lnk} from 'react-scroll'
import {Button as Btn} from '@material-ui/core';
import firebase from 'firebase';



class ForzaHorizon4 extends Component{

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
                title: this.props.location.state.name
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
                    <Figure.Image src='https://compass-ssl.xboxlive.com/assets/94/20/94204d30-8d74-4c94-8ffd-fb592f7615c9.jpg?n=FH4_Series16_Ferrari_488Pista-02_story.jpg' style={{width: '100%', flex: 1, resizeMode: 'contain'}} className="browserCover" alt='cover'></Figure.Image>
                    <div className="carousel-caption">
                        <p className="fnt caption-nfs text-light mb-0">{this.state.title}</p><br/>
                    </div>
                    <div className='row justify-content-center mx-auto'>
                        <button className='btn frz-btn'>
                        <h3 className="fnt btnSub text-light mb-2"><i className='fa fa-play-circle'></i>&emsp;&emsp;<Lnk to='trailer' spy={true} smooth={true}>Watch Trailer</Lnk>&emsp;&emsp;&emsp;</h3>
                        </button>
                        <button className='btn frz-btn'>
                            {this.state.purchased === false?
                        <h3 className="fnt btnSub text-light mt-2"><i> </i>&emsp;&emsp;&emsp;<Lnk to='preOrder' spy={true} smooth={true}>Preorder Now</Lnk>&emsp;&emsp;&emsp;</h3>:
                        <h3 className="fnt btnSub text-light mt-2"><i> </i>&emsp;&emsp;&emsp;<Lnk to='preOrder' spy={true} smooth={true}>You Purchased</Lnk>&emsp;&emsp;&emsp;</h3>                        
                        }
                        </button>
                    </div>
                </div>
                <div className='bgDark myRow justify-content-around'>
                    <Figure.Image src='https://www.trueachievements.com/customimages/086997.jpg' className='p-5 ml-auto' style={{width: '60%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                    <h1 className='fnt game-desc mx-auto text-light'>Play Forza Horizon 4<br/> on All Screens</h1><br/><br/>
                </div>
                <div className='bgDark myRow justify-content-around'>
                    <div>
                        <h1 className='fnt sub-head text-center' style={{color: 'yellow'}}>Computer</h1>
                        <h3 className='fnt sub-sub text-light overflow-hidden ml-5 text-center'>Requires a Web Browser,<br/> Keyboard, and Mouse or compactible controller</h3>
                    </div>
                    <div>
                        <h1 className='fnt sub-head text-center' style={{color: 'yellow'}}>Android Devices</h1>
                        <h3 className='fnt sub-sub text-light overflow-hidden ml-5 text-center'>Requires Fusion App<br/> Android Version 6 (Marshmallow) Or Above</h3>
                    </div>
                    <div>
                        <h1 className='fnt sub-head text-center' style={{color: 'yellow'}}>TV</h1>
                        <h3 className='fnt sub-sub text-light overflow-hidden ml-5 text-center'>Requires Chromecast in TV<br/> With a Suitable Gaming Controller </h3>
                    </div>
                </div>
                <br/>
                <br/>
                <hr style={{height: '1px', width: '80%', backgroundColor: 'grey'}}/>
                <div id='trailer' className='bgDark mx-auto mb-auto'>
                    <h3 className='text-center fnt caption-sub p-5'>Official Trailer</h3>
                    <iframe src={this.props.location.state.vid} className='row justify-content-center' width='1280' height='720' style={{marginLeft: '120px', marginBottom: '50px'}} allow='autoplay; encrypted-media' allowFullScreen title='video'/>
                </div>
                <hr style={{height: '1px', width: '80%', backgroundColor: 'grey'}}/>
                <div id='preOrder' className='bgDark mt-auto'>
                    <h1 className='text-center fnt sub-head p-5'>Game Screenshots</h1>
                    <Figure.Image src='https://hips.hearstapps.com/autoweek/assets/s3fs-public/forzaresized.jpg' style={{width: '100%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                    <div className='myRow'>
                        <Figure.Image src='https://gamespot1.cbsistatic.com/uploads/original/1587/15875866/3437838-fh4.jpg' style={{width: '50%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                        <Figure.Image src='https://s3.amazonaws.com/dexerto-assets-production-cbbdf288/uploads/2020/11/19100838/Forza-Horizon-series-29-summer-update.jpg?w=294' style={{width: '50%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                    </div>
                </div>
                <div className='bg-light p-5'>
                    <div style={{backgroundImage: "linear-gradient(to right, #f12711, #f5af19)", color: 'white',width: '100%',borderRadius: '15px'}} className='column'>
                        <div>
                            <h1 className='fnt game-final pl-5 pt-5'>Forza Horizon 4 is<br/> Ready For You</h1>
                            <br/>
                            <h3 className='fnt  caption-sub pl-5 pb-5'>Buy Forza Horizon 4 Now for Exclusive In-Game Rewards</h3>
                            <h3 className='fnt text-light caption-sub pl-5 pb-5'>Price: {this.props.location.state.price}</h3>
                            <Btn id='buy-link' disabled={this.state.purchased === false?false:true} className="fnt m-5 mt-auto " variant="contained" style={{backgroundImage: "linear-gradient(to right, #EC9F05, #FF4E00)", color: 'white'}}>
                                <Link to={{pathname:'/buy',state:{price: this.props.location.state.price,name: 'Forza Horizon 4',imgSml: this.props.location.state.imgSml}}} className={this.state.isTop ?"fnt text-light":"fnt text-dark"} >{this.state.purchased===false?'Buy Now':'You Purchased'}</Link> 
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

export default ForzaHorizon4