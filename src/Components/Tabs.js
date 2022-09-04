import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import Card from './Card';
import { useSelector } from 'react-redux';
function Tabs(props) {
    const {services}=useSelector(state=>state.ServicesReducers)
    const [state,setState]=useState([])
const SearchHandler=(e)=>{
var value=e.target.value
var result=services.filter((service)=>{

 return  service.title.toLowerCase().includes(value.toLowerCase())
}
)
setState(result)
}

    return (
        <>
            <Container fluid className='allBanner'>
                <Row>
                    <Col lg={{ span: 6 }} md={{ span: 8 }} sm={{ span: 12 }} >
                        {/* <div className='search-box'>
                            <h2>Choose a service to get started.</h2>
                            <div>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        type='search'
                                        placeholder="Search for a service (e.g. 'cleaning')"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button id="button-addon2">
                                        <i class="fas fa-search"></i>
                                    </Button>
                                </InputGroup>

                            </div>
                        </div> */}
                        <div className='search-box py-5 px-5'>
                            <h2 className='text-color text-center'>Choose a service to get started.</h2>
                            <InputGroup className="my-4">
                                <FormControl
                                   type='search'
                                   placeholder="Search for a service (e.g. 'cleaning')"
                                   aria-label="Recipient's username"
                                   aria-describedby="basic-addon2" 
                                   onChange={SearchHandler}
                                />
                                <Button  id="button-addon2">
                                    <i class="fas fa-search"></i>
                                    
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className='col-pain'>
                <Row>
                    <Col md={3}>
                        <h2>All Categories</h2>
                        <nav id="navbar-example2" className="navbar sticky navbar-light  px-3">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link" href="#popular">Popular</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#cleaning">Cleaning</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#assembly">Repair</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#tv">TV and Electronice</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#general">General Handyman</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#plumbing">Plumbing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#electrical">Electrical</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#painting">Painting</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#moving">Moving</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#smartHome">Smart Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#windowtreatment">Window TreatMents</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#homeProjects">Home Improvement Projects</a>
                                </li>
                            </ul>
                        </nav>
                    </Col>



                     <Col md={9}>
                        <Row id='popular'>
                            <Col xs={12}>
                                {
                                    state.length===0 ? ( 
                                        <h4>Popular</h4>
                                    ) : (
                                        <h4>Search Results</h4>
                                    )
                                }

                            </Col>
                            {
                                    state.length===0 ? ( 
                                        <>
                                         {
                                    services.map((service)=>(
                                <Col md={3} sm={6} key={service._id}>
                                    <Card imgSrc={process.env.REACT_APP_API_KEY+ service.image} id={service._id} heading={service.title}></Card>
                                </Col>
                               
                                    ))
                                }
                                        </>
                                    ) : (
                                        <>
                                         {
                                    state.map((service)=>(
                                <Col md={3} sm={6} key={service._id}>
                                    <Card imgSrc={process.env.REACT_APP_API_KEY+ service.image} id={service._id} heading={service.title}></Card>
                                </Col>
                               
                                    ))
                                }
                                        </>
                                    )
                                }
                          
                        </Row>


                        <Row id='cleaning'>
                            <Col xs={12}>
                                <h4>cleaning</h4>

                            </Col>
                            
                            {
                                    services.filter((service)=>service.category==="Cleaning").slice(0,12).map((service)=>(
                                <Col md={3} sm={6} key={service._id}>
                                    <Card imgSrc={process.env.REACT_APP_API_KEY+ service.image} id={service._id} heading={service.title}></Card>
                                </Col>
                               
                                    ))
                                }
                        </Row>


                        <Row id='assembly'>
                            <Col xs={12}>
                                <h4>Repair</h4>

                            </Col>
                            
                            {
                                    services.filter((service)=>service.category==="Repair").slice(0,12).map((service)=>(
                                <Col md={3} sm={6} key={service._id}>
                                    <Card imgSrc={process.env.REACT_APP_API_KEY+ service.image} id={service._id} heading={service.title}></Card>
                                </Col>
                               
                                    ))
                                }
                        </Row>
                        <Row id='tv'>
                            <Col xs={12}>
                                <h4>TV and Electronice</h4>

                            </Col>
                            <Col md={4} sm={6} >
                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all6.jpg'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all8.jpg'} heading="home cleaing"></Card>
                            </Col>
                        </Row>





                        <Row id='general'>
                            <Col xs={12}>
                                <h4>General Handyman</h4>

                            </Col>
                            <Col md={4} sm={6} >
                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all3.jpg'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all4.jpg'} heading="home cleaing"></Card>
                            </Col>
                        </Row>



                        <Row id='plumbing'>
                            <Col xs={12}>
                                <h4>plumbing</h4>

                            </Col>
                            <Col md={4} sm={6} >
                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all11.jpg'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all12.jpg'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all13.jpg'} heading="home cleaing"></Card>
                            </Col>
                        </Row>



                        <Row id='electrical'>
                            <Col xs={12}>
                                <h4>electrical</h4>

                            </Col>
                            <Col md={4} sm={6} >
                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all15.jpg'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all13.jpg'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all14.jpg'} heading="home cleaing"></Card>
                            </Col>
                        </Row>



                        <Row id='painting'>
                            <Col xs={12}>
                                <h4>painting</h4>

                            </Col>
                            <Col md={4} sm={6} >
                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all17.jpg'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all18.jpg'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all19.jpg'} heading="home cleaing"></Card>
                            </Col>
                        </Row>



                        <Row id='moving'>
                            <Col xs={12}>
                                <h4>moving</h4>

                            </Col>
                            <Col md={4} sm={6} >
                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all20.jpg'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all21.jpg'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all22.jpg'} heading="home cleaing"></Card>
                            </Col>
                        </Row>



                        <Row id='smartHome'>
                            <Col xs={12}>
                                <h4>smartHome</h4>

                            </Col>
                            <Col md={4} sm={6} >
                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all23.jpg'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all24.jpg'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all25.jpg'} heading="home cleaing"></Card>
                            </Col>
                        </Row>



                        <Row id='windowtreatment'>
                            <Col xs={12}>
                                <h4>windowtreatment</h4>

                            </Col>
                            <Col md={4} sm={6} >
                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all26.jpg'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all27.jpg'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all28.jpg'} heading="home cleaing"></Card>
                            </Col>
                        </Row>



                        <Row id='homeProjects'>
                            <Col xs={12}>
                                <h4>Home Improvement Projects</h4>

                            </Col>
                            <Col md={4} sm={6} >
                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all29.png'} heading="home cleaing"></Card>
                            </Col>
                            <Col md={4} sm={6} >

                                <Card imgSrc={process.env.PUBLIC_URL + '/images/all30.png'} heading="home cleaing"></Card>
                            </Col>
                        </Row>

                    </Col> 




                </Row>
            </Container>
        </>
    );
}
export default Tabs;
