import React , {useState} from "react";
import "./Summary.css";
import { Button } from "reactstrap";
import {Link ,useLocation,useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import BulletinBoard from '../s0_bulletin/BulletinBoard';
import Footer from '../footer/Footer';
import WelcomeBar from '../s0_welcome/WelcomeBar';

function Summary() {

  const location = useLocation();
  const [customer, setCustomer] = useState({...location.state.customer})
  const [parking, setParking] = useState({...location.state.parking})
  const [time, setTime] = useState({...location.state.time})
  let navigate = useNavigate();

  const navigateTo = (e) => {
    e.preventDefault();   
    let path = '/';
    navigate(path,{state:{customer:customer,parking:parking,time:time}});
  } 
  return (
    <div className="summary">
      <BulletinBoard /> 
      <WelcomeBar/>
      <div className="icon_layer">
        <div className="icon_dot">
            <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>
      <div className="spacer"/>
     
        <div className="item">
          <p>{customer.vehicle}</p>
          <p>{parking.parking}</p>
          <p>{time.time}</p>
          <p><b>Your total is : 12.00 $</b></p>
        </div> 
        
        
        <Footer/>
    </div>
  );
}

export default Summary;
