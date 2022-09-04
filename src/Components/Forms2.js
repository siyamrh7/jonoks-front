import React, { useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {UserRegAction} from '../redux/actions/AuthActions';

function From2(props) {
    let navigate = useNavigate(); 
  const {RegStatus}=useSelector((state)=>state.UserReg)
    const dispatch=useDispatch()
const [state,setState]=useState({
name:"",
mobile:"",
email:"",
password:"",
usertype:"buyer"

})

    const OnChangeHandler=(e)=>{
setState({...state,[e.target.name]:e.target.value})
    }
    const OnSubmitHandler=(e)=>{
        e.preventDefault()
dispatch(UserRegAction(state))
    }
useEffect(()=>{
    if(RegStatus===true){
        navigate('/login')
    }
},[RegStatus])
const {LogStatus}=useSelector(state=>state.UserReg)
useEffect(()=>{
    if(LogStatus){
navigate('/profile')
    }
},[LogStatus])
    return (
        <div>
            <h1>{props.fHeading}</h1>
            <h5 className='py-3'>{props.fsHeading}</h5>
            <Form className='form'>
                <Row>
                    <Col sm={6}>
                        <Form.Control onChange={OnChangeHandler} type='text' name="name" placeholder="Full name" />
                    </Col>
                    <Col sm={6}>
                        <Form.Control onChange={OnChangeHandler} type='text' name="mobile" placeholder="Mobile" />
                    </Col>
                    <Col sm={6}>
                        <Form.Control onChange={OnChangeHandler} type='email' name="email" placeholder="Enter Your email" />
                    </Col>
                    <Col sm={6}>
                        <Form.Control onChange={OnChangeHandler} type='password' name="password" placeholder="Password" />
                    </Col>
                    <Col sm={12}>
                        
                        <button onClick={OnSubmitHandler} className='btn btn-sm'> Get Started</button>
                        
                        <div style={{marginTop:'2rem'}}>
                            <p>
                                Already applied? &nbsp;
                                <span className='text-color'>
                                    <Link to='/pro'>
                                        Join as a seller
                                    </Link>
                                </span>
                            </p>


                        </div>
                    </Col>
                </Row>
            </Form>
          
        </div>
    );
}

export default From2;