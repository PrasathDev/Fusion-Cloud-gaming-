import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import BrowseCover from '../Assets/BrowseCover.jpg'
import {Figure, Card, Navbar} from 'react-bootstrap'
import firebase from 'firebase';
import '../App.css'
import './Navbar'
import {Link} from 'react-router-dom'

class BrowseGames extends Component{
    constructor(props){
        super(props)
        this.state = ({
            isLoaded: false,
            cvrImg: [],
            name: []
        })
    }

    handleClick = () =>{
        const cov = []
        const nam = []
        const db = firebase.firestore()
        db.collection('Fusion').doc('Games').collection('FusionCollection').get().then((data)=>{
            data.forEach(element => {
                console.log(element.data(element.id).name)
                cov.push(element.data(element.id).imgSmall)
                nam.push(element.data(element.id).name)
            });
            this.setState({
                name: nam,
                cvrImg: cov,
                isLoaded: true,
            })
            console.log(this.state.cvrImg)
        })
    }

    componentDidMount(){
        this.handleClick()
    }


    render(){
        return(
            <div className='bgDark'>
                <div className='theCover'>
                <Figure.Image src={BrowseCover} width='100%' className="browserCover" alt='cover'></Figure.Image>
                <div className="carousel-caption">
                  <p className="fnt caption-nfs text-light">Get Our Exclusive Game!<span className='fnt sub-sub'><br/>NFS Rivals</span> </p><br/>
                </div>
                </div>
                <div className='p-5 mb-5 d-flex myRow resize'>
                    {this.state.isLoaded === false?
                    <div>Loading</div>
                    :
                    this.state.name.map((value,index) =>{
                        console.log(value)
                        return(
                            <div className='col-2 p-4 mt-5'>
                            <Card style={{width: '220px', flex: 1, marginRight: '30px', resizeMode: 'contain', height: '300px', borderRadius: '10px'}}>
                                <Card.Img style={{ height:'100%', resizeMode: 'contain', marginRight: '30px', borderRadius: '10px'}} src={this.state.cvrImg[index]}></Card.Img>
                                <Card.Text className='fnt text-center p-4' style={{fontWeight: '700'}}>{value}</Card.Text>
                            </Card>
                            </div>                
                        );
                    })
                    }
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

export default BrowseGames