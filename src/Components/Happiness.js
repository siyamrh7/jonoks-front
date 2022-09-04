import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Happiness(props) {
    return (
        <div className='happy'>
            <Container>
            <Row className=''>
                <Col md={6} className='happiness mb-4'>
                    <div className='h_div'>
                        <h3>{props.headingt}</h3>
                        <img src={props.hImg} alt='' className='img-fluid'></img>
                    </div>
                    <p>{props.hpara}</p>
                    <button className='btn' >Read More!</button>
                </Col>
                <Col md={6} className='mb-4 asw'>

                        <img src={props.rimg} alt='' className='img-fluid h_img'></img>

                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Happiness;