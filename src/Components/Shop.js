import React from 'react';
import { Container, Row, Col, Carousel, ListGroup, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
function Shop(props) {

    const {service}=useSelector(state=>state.ServicesReducers)


    return (
        <Container>
            <Row>
                <Col md={8}>
                

                    <div className='sgInfo py-4'>
                        <img src={process.env.PUBLIC_URL + '/images/all4.jpg'} alt="" srcset="" /> &nbsp; <span>{service.seller.name}
                        </span> 
                        
                    </div>








                            <img
                                className="d-block w-100"
                                src={process.env.REACT_APP_API_KEY+ service.image}
                                alt="First slide"
                            />
                      <div className='pTitle d-flex justify-content-between py-3 '>
                          <h4>{service.title}</h4>
                        <h4><b>${service.price}</b>/hour</h4>
                    </div>

                   
                    {/* About Gig */}


                    {/* <div className='agSeller pb-4'>
                        <Card className='d-flex justify-content-between flex-row align-items-center px-3 border-0 pb-4'>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/all4.jpg'} />
                            <Card.Body className='d-flex justify-content-between flex-column'>
                                <Card.Title className='mb-0'>{service.seller.name}</Card.Title>
                           
                                
                                <a href="http://" className='w-50 text-center px-0 mt-2'>Contact</a>
                            </Card.Body>
                        </Card> */}


                        {/* <div className='border px-4'>
                            <div className='d-flex justify-content-between py-3'>
                                <div>
                                    <div className='pb-3 fs-6 fw-bold'>
                                        <p className='text-black-50'>From</p>
                                        <p>Bangladesh</p>
                                    </div>
                                    <div className='pb-3 fs-6 fw-bold'>
                                        <p className='text-black-50'>From</p>
                                        <p>Bangladesh</p>
                                    </div>

                                </div>
                              
                                <div>
                                    <div className='pb-3 fs-6 fw-bold'>
                                        <p className='text-black-50'>From</p>
                                        <p>Bangladesh</p>
                                    </div>
                                    <div className='pb-3 fs-6 fw-bold'>
                                        <p className='text-black-50'>From</p>
                                        <p>Bangladesh</p>
                                    </div>

                                </div>
                              
                            </div>
                            <hr />

                            <p className='pb-4'>Hi, I am Software engineer working as wordpress website developer for over 6 years. I have firm believe on hardworking and creativity. I can design and develop your website according to high standard of market.</p>
                        </div> */}
                    {/* </div> */}
                    {/* About Seller */}
                </Col>
                {/* Left Side */}
                <Col md={4} className='priceList d-flex align-item-center flex-column ' style={{paddingTop:"10rem"}}>
                    
                    <div className='aGig '>
                        <h4>About the gig</h4>
                        <p>{service.description}</p>

                        
                    </div>
                    {/* <p>For any CSS/ HTML issue, new website, editing in current website, PSD TO HTML</p> */}
                    <div className='d-flex justify-content-between fw-bold pb-3'>
                        <span><i class="fas fa-clock text-color"></i> &nbsp; Category</span>
                        <span><i class="fas fa-history text-color"></i> &nbsp; {service.category}</span>
                    </div>
                    {/* <ul>
                        <li><i class="fas fa-check text-color"></i> &nbsp; Design Customization</li>
                        <li><i class="fas fa-check text-color"></i> &nbsp; Design Customization</li>
                        <li><i class="fas fa-check text-color"></i> &nbsp; Design Customization</li>
                        <li><i class="fas fa-check text-color"></i> &nbsp; Design Customization</li>
                    </ul> */}
                    <div className='d-flex justify-content-center pt-3'>
                    <a href="">Continue ${service.price}/hour</a>
                    </div>
                </Col>
                {/* Right Side */}
            </Row>
        </Container>
    );
}

export default Shop;