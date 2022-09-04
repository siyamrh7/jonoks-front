import { BrowserRouter,Route,Routes } from 'react-router-dom'


import "./App.css";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from "./Components/Home";
import Tabs from "./Components/Tabs";
import Navbar from "./Components/Navbar";
import Shop from './Components/Shop';
import Blog from './Components/Blog';
import Becomepro from './Components/Becomepro';
import Sign from './Components/Sign';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import CreateGig from './Components/CreateGig';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetServices } from './redux/actions/GetServicesActions';

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    var token=localStorage.getItem("token")
    var statuss=false
    if (token)
    {
      statuss=true
      dispatch({type:"USER_LOG_BACK",payload:{token,statuss}})
    }
    dispatch(GetServices())
  },[])
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element = { <Home/> } ></Route>
          <Route path='/all' element = { <Tabs/> } ></Route>
          <Route path='/shop' element = { <Shop/> } ></Route>
          <Route path='/blog' element = { <Blog/> } ></Route>
          <Route path='/pro' element = { <Becomepro/> } ></Route>
          <Route path='/sign' element = { <Sign/> } ></Route>
          <Route path='/login' element = { <Login/> } ></Route>
          <Route path='/profile' element = { <Profile/> } ></Route>
          <Route path='/gig' element = { <CreateGig/> } ></Route>
        </Routes>
      <Footer></Footer>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
      </BrowserRouter>
    </>
  );
}

export default App;
