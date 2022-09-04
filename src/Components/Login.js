import React,{useEffect, useState} from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import {UserLogAction} from '../redux/actions/AuthActions';
import {useNavigate} from 'react-router-dom'
function Login(props) {


    const dispatch=useDispatch()
    const [state,setState]=useState({
        email:"",
        password:""
    })
    const OnChangeHandler=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const OnSubmitHandler=(e)=>{
        e.preventDefault()
        dispatch(UserLogAction(state))
    }
    const {LogStatus}=useSelector(state=>state.UserReg)
        const navigate=useNavigate()
        useEffect(()=>{
            if(LogStatus){
navigate('/profile')
            }
        },[LogStatus])
    return (
        <section id='login'>
            <Container>
                <Row className='m-0'>
                    <Col sm={{ span: 8, offset: 2 }} className='login'>


                        <Row>
                            <Col sm={{ span: 6, offset: 3 }}>
                                <Form>
                                    <h2 className='text-center'>Login to Handy</h2>
                                    <Form.Group className="mb-4 mt-5" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control onChange={OnChangeHandler} name="email" type="email" placeholder="Enter email" />
                                        

                                    </Form.Group>

                                    <Form.Group className="mb-5" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={OnChangeHandler} name="password" type="password" placeholder="Password" />
                                        <Form.Text>
                                            <a href='' className="text-center forgot-text">Forgot password?</a>
                                        </Form.Text>
                                    </Form.Group>

                                    <button onClick={OnSubmitHandler} className='btn login-btn'>Log in</button>

                                    <div className='login-line'>or</div>


                                    <div className='text-center'>
                                        <h6>Password too hard to type?</h6>
                                        <p>We can email you a link so you can sign in without having to type your password</p>
                                    </div>

                                    <div className='or-btn'>
                                    <button className='btn handy-btn'>Send me a Handy Link</button>
                                    <button className='btn facebook-btn'><i class="fab fa-facebook-square"></i> Log in with Facebook</button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Login;