import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { Link} from 'react-router-dom'
import firebase from 'firebase';
import 'react-bootstrap'
import { Card} from 'react-bootstrap';

class GameCards extends Component{
    constructor(props){
        super(props)
        this.state = ({
            isLoaded: false,
            cvrImg: [],
            imgSml: [],
            routeMe: [],
            imgLrg: [],
            price: [],
            vidUrl: [],
            name: []
        })
    }

    handleLoading = () => {
        const cov = []
        const imgS = []
        const route = []
        const imgL = []
        const prc = []
        const vid = []
        const nam = []
        const db = firebase.firestore()
        db.collection('Fusion').doc('Games').collection('FusionGames').get().then((data)=>{
            data.forEach(element => {
                console.log(element.data(element.id).name)
                cov.push(element.data(element.id).coverImg)
                imgS.push(element.data(element.id).imageSmall)
                imgL.push(element.data(element.id).imageLarge)
                prc.push(element.data(element.id).Price)
                vid.push(element.data(element.id).Video)
                nam.push(element.data(element.id).name)
            });
            this.setState({
                name: nam,
                price: prc,
                routeMe: route,
                cvrImg: cov,
                isLoaded: true,
                imgSml: imgS,
                imgLrg: imgL,
                vidUrl: vid
            })

            console.log(this.state.imgSml)
        })
    }



    componentDidMount(){
        this.handleLoading()
    }

    render(){
        return(
            <div className='mx-auto'>
            <div className="row mx-auto p-4" style={{marginRight: '20px',marginLeft: '20px'}}>                
            <Card style={{width: '200px', flex: 1, marginRight: '30px', resizeMode: 'contain', height: '300px', borderRadius: '10px'}}>    
            <Link to={{
                    pathname: '/game/ACVallhalla',
                    state: {
                        name: this.state.name[0],
                        cover: this.state.cvrImg[0],
                        large: this.state.imgLrg[0],
                        price: this.state.price[0],
                        vid: this.state.vidUrl[0],
                        imgSml: this.state.imgSml[0]
                    }
                }} >
                <Card.Img style={{width: '200px', flex: 1, resizeMode: 'contain', marginRight: '30px', borderRadius: '10px', marginBottom: '30px', height: '300px'}} src={this.state.imgSml[0]}></Card.Img>
                </Link>
            </Card>
            <Card style={{width: '200px', flex: 1, marginRight: '30px', resizeMode: 'contain', height: '300px', borderRadius: '10px'}}>
            <Link to={{
                pathname: '/game/watchdogs3',
                state: {
                    name: this.state.name[1],
                    cover: this.state.cvrImg[1],
                    large: this.state.imgLrg[1],
                    price: this.state.price[1],
                    vid: this.state.vidUrl[1],
                    imgSml: this.state.imgSml[1]
                }
            }} > 
                    <Card.Img style={{width: '200px', flex: 1, resizeMode: 'contain', marginRight: '30px', borderRadius: '10px', marginBottom: '30px', height: '300px'}} src={this.state.imgSml[1]}></Card.Img>
                    </Link>
            </Card>
            <Card style={{width: '200px', flex: 1, marginRight: '30px', resizeMode: 'contain', height: '300px', borderRadius: '10px'}}>
                <Link to={{
                    pathname: '/game/cyberpunk2077',
                    state: {
                        name: this.state.name[2],
                        cover: this.state.cvrImg[2],
                        large: this.state.imgLrg[2],
                        price: this.state.price[2],
                        vid: this.state.vidUrl[2],
                        imgSml: this.state.imgSml[2]
                    }
                }} >
                    <Card.Img style={{width: '200px', flex: 1, resizeMode: 'contain', marginRight: '30px', borderRadius: '10px', marginBottom: '30px', height: '300px'}} src={this.state.imgSml[2]}></Card.Img>
                </Link>
            </Card>
            <Card style={{width: '200px', flex: 1, marginRight: '30px', resizeMode: 'contain', height: '300px', borderRadius: '10px'}}>
                <Link to={{pathname:'/game/forzahorizon4',state:{ 
                    name: this.state.name[3],
                    cover: this.state.cvrImg[3],
                    large: this.state.imgLrg[3],
                    price: this.state.price[3],
                    vid: this.state.vidUrl[3],
                    imgSml: this.state.imgSml[3]
                    }}
                }>
                    <Card.Img style={{width: '200px', flex: 1, resizeMode: 'contain', marginRight: '30px', borderRadius: '10px', marginBottom: '30px', height: '300px'}} src={this.state.imgSml[3]}></Card.Img>
                </Link>
            </Card>
            </div>
            </div>
        );
    }
}

export default GameCards