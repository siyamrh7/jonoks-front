import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Application(props) {
    return (
        <div>
            <Container fluid className='application'>
                <Row>
                    <Col md={6} >
                        <div className ='appCol'>
                        <h5>Get Our Aplication</h5>
                        <h2>You Can Easily Find
                            This App…!</h2>
                        <p>I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.</p>
                        <div className='appImg'>
                            <img src={process.env.PUBLIC_URL + '/images/image288.png'} alt='asa'></img>
                            <img src={process.env.PUBLIC_URL + '/images/image289.png'} alt='asas'></img>
                        </div>
                        </div>
                    </Col>
                    <Col md={6} className ='imgpain'>

                            <img src={process.env.PUBLIC_URL + '/images/mobilemuckup.png'} alt='asa' className='img-fluid'></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Application;