import React, { useEffect } from 'react';
import { GetService } from '../redux/actions/GetServicesActions';
import {  useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Card(props) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    

        const getServiceHandle=()=>{
            dispatch(GetService(props.id))
            navigate("/shop")
        }
   
    return (
        <div className='service_img'>
            <img onClick={getServiceHandle} src={props.imgSrc} ></img>
            <h5>{props.heading}</h5>
        </div>
    );
}

export default Card;