import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button as Btn} from '@material-ui/core';
import firebase from 'firebase';
import {Figure,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Link as Lnk} from 'react-scroll'


class WatchDogs3 extends Component{

    constructor(props){
        super(props)
        this.state = ({
            title: '',
            cover: '',
            purchased: false
        })
        console.log(this.props.location.state.vid)
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
                        <p className="wd3 wd3-head text-light mb-0">Watch Dogs<br/><span className='game wd3-head' style={{letterSpacing:'40px'}}>L<span className='fnt wd3-head' style={{fontWeight:'600', color: 'red'}}>Ξ</span>GION</span></p><br/>
                    </div>
                    <div className='row justify-content-center mx-auto'>
                        <button className='btn wd3-btn'>
                        <h3 className="wd3 btnSub text-light"><i className='fa fa-play-circle'></i>&emsp;&emsp;<Lnk to='trailer' spy={true} smooth={true}>Watch Trailer</Lnk>&emsp;&emsp;&emsp;</h3>
                        </button>
                        <button className='btn wd3-btn'>
                            {this.state.purchased === false?
                        <h3 className="wd3 btnSub text-light mt-2"><i> </i>&emsp;&emsp;&emsp;<Lnk to='preOrder' spy={true} smooth={true}>Preorder Now</Lnk>&emsp;&emsp;&emsp;</h3>:
                        <h3 className="wd3 btnSub text-light mt-2"><i> </i>&emsp;&emsp;&emsp;<Lnk to='preOrder' spy={true} smooth={true}>You Purchased</Lnk>&emsp;&emsp;&emsp;</h3>                            
                        }
                        </button>
                    </div>
                </div>
                <div className='bgDark myRow justify-content-around'>
                    <Figure.Image src='https://cdn.mos.cms.futurecdn.net/G3iTBMtqgCJay4diSCAgYm.jpg' className='p-5 ml-auto' style={{width: '60%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                    <h1 className='wd3 game-desc mx-auto text-light'>Play Watch Dogs LEGION<br/> on All Screens</h1><br/><br/>
                </div>
                <div className='bgDark myRow justify-content-around'>
                    <div>
                        <h1 className='wd3 sub-head text-center' style={{color: 'yellow'}}>Computer</h1>
                        <h3 className='fnt sub-sub text-light overflow-hidden ml-5 text-center'>Requires a Web Browser,<br/> Keyboard, and Mouse or compactible controller</h3>
                    </div>
                    <div>
                        <h1 className='wd3 sub-head text-center' style={{color: 'yellow'}}>Android Devices</h1>
                        <h3 className='fnt sub-sub text-light overflow-hidden ml-5 text-center'>Requires Fusion App<br/> Android Version 6 (Marshmallow) Or Above</h3>
                    </div>
                    <div>
                        <h1 className='wd3 sub-head text-center' style={{color: 'yellow'}}>TV</h1>
                        <h3 className='fnt sub-sub text-light overflow-hidden ml-5 text-center'>Requires Chromecast in TV<br/> With a Suitable Gaming Controller </h3>
                    </div>
                </div>
                <br/>
                <br/>
                <hr style={{height: '1px', width: '80%', backgroundColor: 'grey'}}/>
                <div className='bgDark mx-auto mb-auto wd3' id='trailer'>
                    <h3 className='text-center text-light caption-sub p-5'>Official Trailer</h3>
                    <iframe src={this.props.location.state.vid} className='row justify-content-center' width='1280' height='720' style={{marginLeft: '120px', marginBottom: '50px'}} allow='autoplay; encrypted-media' allowFullScreen title='video'/>
                </div>
                <hr style={{height: '1px', width: '80%', backgroundColor: 'grey'}}/>
                <div className='bgDark mt-auto'>
                    <h1 className='text-center text-light sub-head p-5 wd3'>Game Screenshots</h1>
                    <Figure.Image src='https://media.gq-magazine.co.uk/photos/5f99490a83301c23f142ef5d/master/pass/Watch%20Dogs%201%20(1).jpg' style={{width: '100%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                    <div className='myRow'>
                        <Figure.Image src='https://www.newgamenetwork.com/images/uploads/gallery/WatchDogsLegion/wdlpreview_01.jpg' style={{width: '50%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                        <Figure.Image src='https://s31092.pcdn.co/wp-content/uploads/2019/11/Watch-Dogs-Legion-1320x743.jpg' style={{width: '50%', flex: 1, resizeMode: 'contain'}} alt='cover'></Figure.Image>
                    </div>
                </div>
                <div id='preOrder' className='bg-light p-5'>
                    <div style={{backgroundImage: "linear-gradient(to right, #fc00ff, #00dbde)", color: 'white',width: '100%',borderRadius: '15px'}} className='column'>
                        <div>
                            <h1 className='wd3 game-final pl-5 pt-5'>Watch Dogs Legion<br/>is Ready For You</h1>
                            <br/>
                            <h3 className='fnt text-dark caption-sub pl-5 pb-5'>Buy Watch Dogs Legion Now for Exclusive In-Game Rewards</h3>
                            <h3 className='fnt text-dark caption-sub pl-5 pb-5'>Price: {this.props.location.state.price}</h3>
                            
                            <Btn disabled={this.state.purchased === false?false:true} className="fnt m-5 mt-auto " variant="contained" style={{backgroundImage: "linear-gradient(to right, #EC9F05, #FF4E00)", color: 'white'}}>
                                <Link to={{pathname:'/buy',state:{price: this.props.location.state.price,name: 'Watch Dogs: Legion',imgSml: this.props.location.state.imgSml}}} className={this.state.isTop ?"fnt text-light":"fnt text-dark"} >{this.state.purchased===false?'Buy Now':'You Purchased'}</Link> 
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

export default WatchDogs3