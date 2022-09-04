import React from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';
function FooterList(props) {
    return (
        <div>
            <ListGroup>
                <h4>{props.listHeading}</h4>
                <ListGroup.Item>{props.listItem}</ListGroup.Item>
                <ListGroup.Item>{props.listItem1}</ListGroup.Item>
                <ListGroup.Item>{props.listItem2}</ListGroup.Item>
                <ListGroup.Item>{props.listItem3}</ListGroup.Item>
            </ListGroup>
        </div>
    );
}










export default FooterList;