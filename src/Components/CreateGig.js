import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Col, Container, Row, Form, FloatingLabel } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const CreateGig = () => {

      const {token,user}=useSelector(state=>state.UserReg)
const [state,setState]=useState({
    title:"",
    description:"",
    price:null,
    image:null
})

const onchangeHandler=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
    e.preventDefault()
}
const onImageChange=(e)=>{
setState({...state,image:e.target.files[0]})
}
const onsubmitHandler=async()=>{
    let formdata = new FormData();
formdata.append("title", state.title);
formdata.append("description", state.description);
formdata.append("price", state.price);
formdata.append("image", state.image);
let bodyContent=formdata
     axios.post(`${process.env.REACT_APP_API_KEY}createservice`,bodyContent,{headers: {
         'Authorization': token,
        "Content-Type": "multipart/form-data",
  }}).then(res=>toast.info(res.data.msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })).catch(err=>console.log(err))
    }    

    const navigate=useNavigate()
    useEffect(()=>{
        if(user.usertype==="buyer"){
            navigate('/')
        }
    },[user])

    return (
       <div className='gs h-100'>
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                   

                        <Form.Group as={Row} className="mb-5" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Gig Title
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" name="title" onChange={onchangeHandler}/>

                                   
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-5" controlId="formHorizontalEmail">

                            <Form.Label column sm={2}>
                                Description
                            </Form.Label>
                            <Col sm={10}>
                                <FloatingLabel controlId="floatingTextarea2" >
                                <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '130px' }}
                                        name="description"
                                        onChange={onchangeHandler}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Form.Group>

{/*                      
                        <Form.Group as={Row} className="mb-5" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                category
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Select aria-label="Default select example" name="category" onChange={onchangeHandler}>
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                        </Form.Group> */}
                        <Form.Group as={Row} className="mb-5" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Image
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control   type="file" name="image" onChange={onImageChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-5" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Price
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="number" placeholder='10$ Per Hour' name="price" onChange={onchangeHandler}/>
                            </Col>
                        </Form.Group>

                   
                        <button  style={{backgroundColor:'#143151',color:'white',fontWeight:'bold',padding:'1rem 1.5rem',marginBottom:'2rem',float:'right'}} onClick={onsubmitHandler} >PUBLISH</button>
                </Col>

            </Row>

        </Container>

       </div>
    );
};

export default CreateGig;