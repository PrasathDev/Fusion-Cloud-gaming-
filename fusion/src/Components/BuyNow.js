import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {Figure, Form,Button} from 'react-bootstrap'
import firebase from 'firebase';
import {Button as Btn} from '@material-ui/core';
import { Card, Form, Row, Col } from 'react-bootstrap';


class BuyNow extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLogged: false,
            price: "Don't Try to Come Here Directly!! Go Somewhere Else",
            name: '',
            cardNo: '',
            cardName: '',
            imgSml: '',
            crdLen: false,
        }
        
    }

    handleSubmit = () =>{
        console.log(this.state.crdLen)
        if(this.state.crdLen===true){
            const db = firebase.firestore()
            db.collection('Fusion').doc('Members').collection('Transaction').doc(firebase.auth().currentUser.uid).get().then((snapshot) =>{
                if(snapshot.exists){
                    if(this.state.name === 'Assassins Creed: Valhalla'){
                        db.collection('Fusion').doc('Members').collection('Transaction').doc(firebase.auth().currentUser.uid).update({
                            uid: firebase.auth().currentUser.uid,
                            acv : true
                        })
                    }
                    if(this.state.name === 'Cyberpunk 2077'){
                        db.collection('Fusion').doc('Members').collection('Transaction').doc(firebase.auth().currentUser.uid).update({
                            uid: firebase.auth().currentUser.uid,
                            cbp : true
                        })
                    }
                    if(this.state.name === 'Watch Dogs: Legion'){
                        db.collection('Fusion').doc('Members').collection('Transaction').doc(firebase.auth().currentUser.uid).update({
                            uid: firebase.auth().currentUser.uid,
                            wd3 : true
                        })
                    }
                    if(this.state.name === 'Forza Horizon 4'){
                        db.collection('Fusion').doc('Members').collection('Transaction').doc(firebase.auth().currentUser.uid).update({
                            uid: firebase.auth().currentUser.uid,
                            frh : true
                        })
                    }        
                }
                else{
                    db.collection('Fusion').doc('Members').collection('Transaction').doc(firebase.auth().currentUser.uid).set({
                        uid: firebase.auth().currentUser.uid
                    }).then(() =>{
                        if(this.state.name === 'Assassins Creed: Valhalla'){
                            db.collection('Fusion').doc('Members').collection('Transaction').doc(firebase.auth().currentUser.uid).update({
                                uid: firebase.auth().currentUser.uid,
                                acv : true
                            })
                        }
                        if(this.state.name === 'Cyberpunk 2077'){
                            db.collection('Fusion').doc('Members').collection('Transaction').doc(firebase.auth().currentUser.uid).update({
                                uid: firebase.auth().currentUser.uid,
                                cbp : true
                            })
                        }
                        if(this.state.name === 'Watch Dogs: Legion'){
                            db.collection('Fusion').doc('Members').collection('Transaction').doc(firebase.auth().currentUser.uid).update({
                                uid: firebase.auth().currentUser.uid,
                                wd3 : true
                            })
                        }
                        if(this.state.name === 'Forza Horizon 4'){
                            db.collection('Fusion').doc('Members').collection('Transaction').doc(firebase.auth().currentUser.uid).update({
                                uid: firebase.auth().currentUser.uid,
                                frh : true
                            })
                        }
                    })
                }
            })
            alert('Thank You For Purchasing '+this.state.name)
            this.props.history.push('/')
        }
    }

    componentDidMount(){
        try{
            if(firebase.auth().currentUser.uid !== null){
                this.setState({
                    isLogged: true
                })
            }
        }
        catch(e){}
        try{
            if(this.props.location.state.price !== null){
                this.setState({
                    price: this.props.location.state.price,
                    name: this.props.location.state.name,
                    imgSml: this.props.location.state.imgSml
                })
            }
        }
        catch(e){}
    }

    render(){
        return(
            this.state.isLogged === true?
            <div className='col p-5' style={{ backgroundColor: 'black', height: '100%'}}>
                <div className='row p-5'>
                    <div className='col p-5'>
                        <h1 className='fnt caption-sub p-2 text-light'>Game:&emsp;{this.state.name}</h1>
                        <h1 className='fnt caption-sub p-2 text-light'>Price:&emsp;&emsp;{this.state.price}</h1>
                        <Card style={{width: '600px', flex: 1, backgroundImage:'linear-gradient(#b3cdd1 0%, #9fa4c4 74%)', marginRight: '30px', resizeMode: 'contain', height: '320px', borderRadius: '10px'}}>
                            <Form>
                                <Row>
                                    <Col className='m-3 ml-5 mr-5'>
                                    <Form.Group>
                                    <Form.Label className='fnt text-dark'>Name</Form.Label>
                                    <Form.Control placeholder="Name On Card" />
                                    </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='m-5 col-7 my-auto'>
                                    <Form.Group>
                                    <Form.Label className='fnt text-dark'>Card Number</Form.Label>    
                                    <Form.Control onChange={(e) =>{
                                        this.setState({
                                            cardNo: e.target.value
                                        })
                                        if(e.target.value.length === 16){
                                            this.setState({
                                                crdLen: true
                                            })
                                        }
                                        if(e.target.value.length !== 16){
                                            this.setState({
                                                crdLen: false
                                            })
                                        }
                                        if(e.target.value.length >= 4){
                                            if(e.target.value[0] === '4'){
                                                this.setState({
                                                    cardName: 'Visa'
                                                })
                                            }
                                            if(e.target.value[0] === '5'){
                                                this.setState({
                                                    cardName: 'Maestro'
                                                })
                                            }
                                            if(e.target.value[0] === '6'){
                                                this.setState({
                                                    cardName: 'Electron'
                                                })
                                            }
                                            if(e.target.value[0] === '0' || e.target.value[0] === '1' || e.target.value[0] === '2' || e.target.value[0] === '3'){
                                                this.setState({
                                                    cardName: 'Invalid'
                                                })
                                            }
                                            if(e.target.value[0] === '7' || e.target.value[0] === '8'|| e.target.value[0] === '9'){
                                                this.setState({
                                                    cardName: 'Invalid'
                                                })
                                            }
                                        }
                                    }} placeholder="Card Number" />
                                    </Form.Group>
                                    </Col>
                                    <Col className='col-3 my-auto'>
                                        <p className='fnt text-dark sub-sub mt-4'>{this.state.cardName}</p>
                                    </Col>
                                    <Col className='m-3 ml-5 col-4'>
                                    <Form.Group>
                                    <Form.Label className='fnt text-dark'>Expiry Month</Form.Label>
                                    <Form.Control placeholder="MM/YY" />
                                    </Form.Group>
                                    </Col>
                                    <Col className='m-3 ml-5 col-2'>
                                    <Form.Group>
                                    <Form.Label className='fnt text-dark'>CVV</Form.Label>
                                    <Form.Control placeholder="CVV" />
                                    </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </div>
                    <div className='col p-5'>
                        <h1 className='fnt caption-sub p-2 text-light'>{this.state.name}</h1>
                        <Card style={{width: '220px', flex: 1, marginRight: '30px', resizeMode: 'contain', height: '320px', borderRadius: '10px'}}>
                        <Card.Img style={{width: '220px', resizeMode: 'contain', marginRight: '30px', borderRadius: '10px', marginBottom: '30px', height: '320px'}} src={this.state.imgSml}></Card.Img>
                        </Card>
                    </div>
                    <div className='col-8 text-center'>
                        <>
                        <Btn className="fnt m-5 mt-auto" onClick={this.handleSubmit} variant="contained" style={{backgroundImage: "linear-gradient(to right, #EC9F05, #FF4E00)", color: 'white'}}>
                            Purchase 
                        </Btn>
                        </>
                    </div>
                </div>
            </div>:
            <div className='fnt caption-head text-dark'>
                <h1 className='text-center p-5'>You're Not Signed in</h1>
            </div>
        );
    }
}

export default BuyNow;