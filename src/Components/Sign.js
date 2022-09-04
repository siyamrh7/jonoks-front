import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Forms2 from './Forms2';
function Sign(props) {
    return (
        <Container className='pb-5'>
            <Row>
                <Col sm={{ span: 8, offset: 2 }}>

                    <Forms2></Forms2>
                </Col>
            </Row>
        </Container>
    );
}

export default Sign;