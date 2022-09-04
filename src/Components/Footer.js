import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import FooterList from './FooterList';
import NewsLetter from './NewsLetter';

function Footer(props) {
    return (
        <Container fluid className='footer'>
            <Row>
                <Col xxl={2} xl ={2} lg ={3} md={4} sm ={6}>
                    <FooterList listHeading='Home' listItem='Home' listItem1='Community' listItem2='Events' listItem3='Contact'></FooterList>
                </Col>
                <Col xxl={2} xl ={2} lg ={3} md={4} sm ={6}>
                    <FooterList listHeading='Resources' listItem='Blog' listItem1='News' listItem2='Guides' listItem3='Help Center'></FooterList>
                </Col>
                <Col xxl={2} xl ={2} lg ={3} md={4} sm ={6}>
                    <FooterList listHeading='Community' listItem='NewsFeed' listItem1='Profile' listItem2='Friends' listItem3='Forums'></FooterList>
                </Col>
                <Col xxl={2} xl ={2} lg ={3} md={4} sm ={6}>
                    <FooterList listHeading='Main links' listItem='Members' listItem1='Activity' listItem2='Groups' listItem3='Private Group'></FooterList>
                </Col>
                <Col xxl={4} xl ={4} lg ={4} md ={8 } sm ={12}>
                <NewsLetter></NewsLetter>
                </Col>

            </Row>
        </Container>
    );
}

export default Footer;