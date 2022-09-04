import React from 'react';

function NewsLetter(props) {
    return (
        <div className='newsLetter'>
            <h4>Subscribe Cirkle Newsletter</h4>
            <p>Subscribe to be the first one to know about updates. Enter your email</p>
            <div>
                <input type='email' placeholder='Enter Your's email></input>
                <button className='btn'>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;