import React, { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Banner from "./Banner";
import Happiness from "./Happiness";
import Application from "./Application";
import Partner from "./Partner";
import { NavLink ,useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'
function Home(props) {
  const {LogStatus,user}=useSelector(state=>state.UserReg)
  const {services}=useSelector(state=>state.ServicesReducers)

    const navigate=useNavigate()
useEffect(()=>{
  if(user.usertype==="seller" && LogStatus){
     navigate('/profile')
  }
},[LogStatus,user])
    return (
        <Container fluid>
       <Banner services={services}></Banner>       
       <Happiness
         hImg={process.env.PUBLIC_URL + "/images/svg6.svg"}
         hpara={
           "Your happiness is our goal, If you aren’t happy, we will work to make it right. Our friendly customer service agents are available 24 hours a day, 7 days a week. The happiness Guarantee only applies when you book and pay for services directly through this platform."
         }
         rimg={process.env.PUBLIC_URL + "/images/image1.jpg"}
         headingt={`Your Happiness,  Guaranteed`}
       ></Happiness>
       <Application></Application>
       <Happiness
         hImg={process.env.PUBLIC_URL + "/images/svg7.svg"}
         hpara={
           "Your happiness is our goal, If you aren’t happy, we will work to make it right. Our friendly customer service agents are available 24 hours a day, 7 days a week. The happiness Guarantee only applies when you book and pay for services directly through this platform."
         }
         rimg={process.env.PUBLIC_URL + "/images/image2.png"}
         headingt={`Become a Five
 Star Pro`}
       ></Happiness>
       <Partner></Partner>
 
     </Container>
    );
}

export default Home;