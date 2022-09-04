import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Partner(props) {
    return (
        <Container className='text-center my-5 py-2'>
            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <h2 className='text-color'>Our Partners</h2>
                    <p className='fw-bold'>Candice Corner works with partners who want to provide their  customers, tenants, or employees easy access to quality home services at affordable prices.</p>
                    <button className='btn'>Be a Partner</button>
                </Col>
            </Row>
        </Container>
    );
}

export default Partner;