
import React, { useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Card, Button } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
// import Card from './Card';
import { useSelector } from 'react-redux';
function Tabs(props) {
    const {user}=useSelector(state=>state.UserReg)
    const navigate=useNavigate()
    useEffect(()=>{
        if(user.usertype==="buyer"){
            navigate('/')
        }
    },[user])
    return (
        <>

            <Container className='col-pain pb-5'>
                <Row>

                    <Col md={3}>
                        <Row className='border py-4 mb-4'>
                            <Col sm={12} className='d-flex justify-content-end mb-3' >
                                <Button className="btn  position-relative badge-btn">
                                    Profile <span className="position-absolute top-50 start-0 translate-middle p-1 bg-danger rounded-circle">
                                    </span>
                                </Button>
                            </Col>
                            <Col sm={12} className='d-flex justify-content-center'>
                                <img src={process.env.PUBLIC_URL + '/images/all4.jpg'} alt="seller profile image" className='rounded-circle' />
                            </Col>

                            <Col sm={12} className='mt-2 text-center'>
                                <h4 className='m-0 text-color'>Seller Name</h4>
                                <h5 className='my-1'>say something yourself</h5>
                                <div className='spStar'>
                                    <div className='spFiveStar'>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i> 5(120 reviwes)
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12}></Col>
                            <Col sm={12} className='pLink d-flex justify-content-between'>
                                <a href="http://">Contact me</a>
                                <a href="http://">Get a Quote</a>
                            </Col>

                        </Row>
                        <Row className='border py-4 mb-4'>
                            <Col sm={12} className='d-flex flex-column mb-3' >
                                <h3 className='text-color pb-3'>Description</h3>
                                <p className='text-black-50 fs-6 mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus in neque quasi, saepe alias error accusamus autem illum, minus, eum a modi maiores iste possimus harum veritatis expedita repellendus non.</p>
                            </Col>

                        </Row>
                    </Col>





                    <Col md={9}>
                        <Row>
                            <Col md={12}>
                                <div className='gigheader'>
                                    <h3>Your Services</h3>
                                    <Link to='/gig'>creact gig</Link>
                                </div>
                            </Col>
                        </Row>
                        <Row id='popular'>

                            <Col md={4} sm={6} >
                                <Card>
                                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/all2.jpg'} />
                                    <Card.Body>
                                        <div className='s-info'>
                                            <span className="position-relative">
                                                <img src={process.env.PUBLIC_URL + '/images/all4.jpg'} alt="seller profile image" className='rounded-circle' />
                                                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                                </span>
                                            </span>
                                            <span>
                                                <p>Your Name</p>
                                                <p>Seller Level</p>
                                            </span>
                                        </div>
                                        <Card.Title>I will create a wordpress website or wordpress website design</Card.Title>
                                        <div className='sStar py-1'>
                                            <span className='text-warning'><i class="fas fa-star"></i>5</span>(6)
                                        </div>
                                        <hr />
                                        <div className='sServiceInfo d-flex justify-content-between'>
                                            <div className='text-warning'>
                                                <i class="fas fa-bars"></i> &nbsp;
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <div>
                                                <p className='m-0'>Starting With <b>$1000</b></p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4} sm={6} >
                                <Card>
                                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/all2.jpg'} />
                                    <Card.Body>
                                        <div className='s-info'>
                                            <span className="position-relative">
                                                <img src={process.env.PUBLIC_URL + '/images/all4.jpg'} alt="seller profile image" className='rounded-circle' />
                                                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                                </span>
                                            </span>
                                            <span>
                                                <p>Your Name</p>
                                                <p>Seller Level</p>
                                            </span>
                                        </div>
                                        <Card.Title>I will create a wordpress website or wordpress website design</Card.Title>
                                        <div className='sStar py-1'>
                                            <span className='text-warning'><i class="fas fa-star"></i>5</span>(6)
                                        </div>
                                        <hr />
                                        <div className='sServiceInfo d-flex justify-content-between'>
                                            <div className='text-warning'>
                                                <i class="fas fa-bars"></i> &nbsp;
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <div>
                                                <p className='m-0'>Starting With <b>$1000</b></p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4} sm={6} >
                                <Card>
                                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/all2.jpg'} />
                                    <Card.Body>
                                        <div className='s-info'>
                                            <span className="position-relative">
                                                <img src={process.env.PUBLIC_URL + '/images/all4.jpg'} alt="seller profile image" className='rounded-circle' />
                                                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                                </span>
                                            </span>
                                            <span>
                                                <p>Your Name</p>
                                                <p>Seller Level</p>
                                            </span>
                                        </div>
                                        <Card.Title>I will create a wordpress website or wordpress website design</Card.Title>
                                        <div className='sStar py-1'>
                                            <span className='text-warning'><i class="fas fa-star"></i>5</span>(6)
                                        </div>
                                        <hr />
                                        <div className='sServiceInfo d-flex justify-content-between'>
                                            <div className='text-warning'>
                                                <i class="fas fa-bars"></i> &nbsp;
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <div>
                                                <p className='m-0'>Starting With <b>$1000</b></p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Tabs;
