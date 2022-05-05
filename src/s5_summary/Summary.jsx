import React , {useState} from "react";
import "./Summary.css";
import { Button } from "reactstrap";
import {Link ,useLocation,useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import BulletinBoard from '../s0_bulletin/BulletinBoard';
import Footer from '../footer/Footer';
import WelcomeBar from '../s0_welcome/WelcomeBar';
import IconLayer from "../s0_icon_layer/IconLayer";

function Summary() {

  const location = useLocation();
  const [customer, setCustomer] = useState({...location.state.customer})
  const [vehicle, setVehicle] = useState({...location.state.vehicle})  
  const [parking, setParking] = useState({...location.state.parking})
  const [time, setTime] = useState({...location.state.time})
  let navigate = useNavigate();

  const navigateTo = (e) => {
    e.preventDefault();   
    let path = '/';
    navigate(path,{state:{customer:customer,
      vehicle:vehicle,
      parking:parking,
      time:time}});
  } 
  return (
    <div className="summary">
      <BulletinBoard /> 
      <WelcomeBar/>
      <IconLayer icon={faCheck} />
      <div className="spacer"/>
     
        <div className="item no_hover">
          <p>{vehicle.make} {vehicle.model}, {vehicle.regNumber}</p>
          <p>{parking.parking}</p>
          <p>{time.desc}</p>
          <p><b>Your total is : {2*(time.value)} $</b></p>
        </div> 
        
        
        <Footer/>
    </div>
  );
}

export default Summary;
