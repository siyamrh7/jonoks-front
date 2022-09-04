import React from 'react';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Carousel } from 'react-bootstrap';
import CardMini from './CardMini';
import Card from './Card';

function Banner({services}) {

    return (
        <>



            <Container>
                <Row>
                    <Col sm={12} className='p45'>
                        <h1 className='section_heading'>The easy, reliable way to take care of your home.</h1>
                    </Col>

                    <Col xs={12} className='p60'>
                        <Row>
                            <Col md={4} sm={4}>
                                <CardMini imgsrc={process.env.PUBLIC_URL + '/images/svg1.svg'} title='home cleaing'></CardMini>
                            </Col>
                            <Col md={4} sm={4}>
                                <CardMini imgsrc={process.env.PUBLIC_URL + '/images/svg2.svg'} title='Health & Beauty'></CardMini>
                            </Col>
                            <Col md={4} sm={4}>
                                <CardMini imgsrc={process.env.PUBLIC_URL + '/images/svg3.svg'} title='Repair'></CardMini>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* First Row */}


                <Row>
                    <Col sm={12}>
                        <h1 className='section_heading'>Cleaning and Handyman Tasks</h1>

                    </Col>
                    <Col sm={12} className='pt-3'>
                        <h5 className='text-color'>Instantly book highly rated pros for cleaning and handyman tasks at an upfront price.</h5>

                    </Col>
                </Row>
                {/* First Slider Heading */}


                <Row className='p45'>
                    <Carousel fade>
                        <Carousel.Item>
                            <Row>
                            {
                                    services.filter((service)=>service.category==="Cleaning").slice(0,4).map((service)=>(
                                <Col md={3} sm={6} key={service._id}>
                                    <Card imgSrc={process.env.REACT_APP_API_KEY+ service.image} id={service._id} heading={service.title}></Card>
                                </Col>
                               
                                    ))
                                }
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>

                            {
                                    services.filter((service)=>service.category==="Cleaning").slice(4,8).map((service)=>(
                                <Col md={3} sm={6} key={service._id}>
                                    <Card imgSrc={process.env.REACT_APP_API_KEY + service.image} id={service._id} heading={service.title}></Card>
                                </Col>
                               
                                    ))
                                }
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>

                            {
                                    services.filter((service)=>service.category==="Cleaning").slice(8,12).map((service)=>(
                                <Col md={3} sm={6} key={service._id}>
                                    <Card imgSrc={process.env.REACT_APP_API_KEY+ service.image} id={service._id} heading={service.title} ></Card>
                                </Col>
                               
                                    ))
                                }
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Row>

                {/* First Slider */}



                <Row>
                    <Col sm={12}>
                        <h1 className='section_heading py-2'>Repair and Handyman Tasks</h1>

                    </Col>
                    <Col sm={12} className='pt-3'>
                        <h5 className='text-color'>Instantly book highly rated pros for cleaning and handyman tasks at an upfront price.</h5>

                    </Col>
                </Row>
                {/* Second Slider Heading */}


                <Row className='p45'>
                <Carousel fade>
                        <Carousel.Item>
                            <Row>

                                {
                                    services.filter((service)=>service.category==="Repair").slice(0,4).map((service)=>(
                                <Col md={3} sm={6} key={service._id}>
                                    <Card imgSrc={process.env.REACT_APP_API_KEY+ service.image} id={service._id} heading={service.title}></Card>
                                </Col>
                               
                                    ))
                                }
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>

                            {
                                    services.filter((service)=>service.category==="Repair").slice(4,8).map((service)=>(
                                <Col md={3} sm={6} key={service._id}>
                                    <Card imgSrc={process.env.REACT_APP_API_KEY+ service.image} id={service._id} heading={service.title}></Card>
                                </Col>
                               
                                    ))
                                }
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                            {
                                    services.filter((service)=>service.category==="Repair").slice(8,12).map((service)=>(
                                <Col md={3} sm={6} key={service._id}>
                                    <Card imgSrc={process.env.REACT_APP_API_KEY+ service.image} id={service._id} heading={service.title}></Card>
                                </Col>
                               
                                    ))
                                }
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                {/* Second Slider */}

            </Container>



        </>

    );
}

export default Banner;