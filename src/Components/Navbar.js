import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink ,useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
function NavBar() {
    const {LogStatus,user}=useSelector(state=>state.UserReg)
    const navigate=useNavigate()
    const dispatch =useDispatch()
const logout=()=>{
    localStorage.removeItem('token')
    dispatch({type:"LOGOUT"})
    navigate('/sign')
}
    return (<Navbar expand="lg">
        <Container>
            <Navbar.Brand >

                <NavLink className='nav-link' to={user.usertype==="seller" && LogStatus ? '/profile' : '/'}><img
                    alt=""
                    src={process.env.PUBLIC_URL + '/images/logo.png'}
                    // width="100"
                    // height="100"
                    className="d-inline-block align-top"
                />{' '}</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className='nav-link' to="/all">All service</NavLink>
                </Nav>
                <Nav className="ms-auto">
{
    LogStatus ?  (
        <>
        
        <button className='nav-link' onClick={logout} >Logout</button>
        </>

    ) : (
        <>
        <NavLink className='nav-link' to="/sign">Sign Up</NavLink>
        <NavLink className='nav-link' to="/login">Login</NavLink>
        </>
    )
}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
}


export default NavBar;