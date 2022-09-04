import React from 'react';
import Forms from './Forms';
import { Col, Container, Row } from 'react-bootstrap';

function Becomepro(props) {
    return (
        <section id='pros'>
            <Container className='py-5'>
                <Row>
                    <Col md={6} sm={{ order: 1 }} xs={{ order: 2 }}>
                        <Forms fHeading='Start earning money this week!' fsHeading='Gain access to hundreds of jobs in your city and build your own schedule.'></Forms>
                    </Col>
                    <Col md={6} sm={{ order: 2 }} xs={{ order: 1 }}>
                        <div className='pros-bg-img'>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Becomepro;