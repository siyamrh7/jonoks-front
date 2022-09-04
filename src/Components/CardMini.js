import React from 'react';

function CardMini(props) {
    return (
        <div className='card_mini'>
             <img src={props.imgsrc} className = 'img-fluid'></img>
             <h5>{props.title}</h5>
        </div>
    );
}

export default CardMini;