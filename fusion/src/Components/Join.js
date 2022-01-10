import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import BrowseCover from '../Assets/BrowseCover.jpg'
import {Figure, Card, Navbar,Form,Button} from 'react-bootstrap'
import firebase from 'firebase';
import '../App.css'
import './Navbar'
import {Link} from 'react-router-dom'

class JoinFusion extends Component{
    constructor(props){
        super(props)
        this.state = ({
            name: '',
            eMail: '',
            reason: '',
            city: '',
            pincode: '' 
        })
    }

    render(){
        return(
        <div>
            <div className='bgDark'>
                <Figure.Image src='https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/75540223_112589936863656_2489875193841844224_o.jpg?_nc_cat=111&ccb=2&_nc_sid=dd9801&_nc_ohc=Yi0zVgDarbsAX-vaEwA&_nc_ht=scontent.fmaa1-1.fna&oh=c45fe5aaf6a5dabc6e57113599a7ed56&oe=6036B15F' style={{width: '100%', flex: 1, resizeMode: 'contain'}} className="coverImg" alt='cover'></Figure.Image>
                <div className="carousel-caption">
                    <p className="fnt caption-head text-light">Join Fusion For Rs. 399/Month<br/></p><br/>
                    <span className='fnt sub-sub text-light'>You can cancel Fusion Membership at anytime you needed</span>
                </div>
            </div>
            <div className='row p-5'>
                <div className='col-md-7'>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className='fnt text-dark'>Email address</Form.Label>
                        <Form.Control className='fnt text-dark' type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className='fnt text-dark'>Name</Form.Label>
                        <Form.Control className='fnt text-dark' type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className='fnt text-dark'>Reason</Form.Label>
                        <Form.Control className='fnt text-dark' type="text" placeholder="Reason" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className='fnt text-dark'>City</Form.Label>
                        <Form.Control className='fnt text-dark' type="text" placeholder="City" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
                <div className='col-md-5'>
                    <Figure.Image src='https://media.moddb.com/images/articles/1/283/282045/fso_fusion-shift-logo_symbol-cir.png' style={{width: '70%', flex: 1, resizeMode: 'contain'}} className='p-5' alt='cover'></Figure.Image>
                </div>
            </div>
        </div>
        );
    }
}

export default JoinFusion;