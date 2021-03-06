import React ,{useState}from "react";
import "./Confirmation.css";
import { Button } from "reactstrap";
import {Link ,useLocation,useNavigate} from 'react-router-dom';
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import BulletinBoard from '../s0_bulletin/BulletinBoard';
import Footer from '../footer/Footer';
import WelcomeBar from '../s0_welcome/WelcomeBar';
import IconLayer from "../s0_icon_layer/IconLayer";

function Confirmation() {
  const location = useLocation();
  const [customer, setCustomer] = useState({...location.state.customer})
  const [vehicle, setVehicle] = useState({...location.state.vehicle})  
  const [parking, setParking] = useState({...location.state.parking})
  const [time, setTime] = useState({...location.state.time})
  const [total, setTotal] = useState((parking.rate*(time.units==="min"? (time.value/60) : time.value)))
  let navigate = useNavigate();

  const navigateToSummary = (e) => {
    e.preventDefault();   
    let path = '/summary';
    navigate(path,{state:{customer:customer,
      vehicle:vehicle,
      parking:parking,
      time:time,
      total:total}});
  } 
  return (
    <div className="confirmation">
      <BulletinBoard /> 
      <WelcomeBar/>
      <IconLayer icon={faChartLine} />
        <div className="spacer"/>
        <div className="item no_hover">
        {vehicle.color} {vehicle.make} {vehicle.model} <i>{vehicle.regNumber}</i>
        </div> 
        <div className="item no_hover">
          {parking.parking}
        </div>    
        <div className="item no_hover">
        {time.desc === "Max Time" ? (time.desc+"   ("+time.value+" "+time.units+")") : time.desc}
        </div> 
        <div className="item no_hover">
          Total: $ {total.toFixed(2)}
        </div>
        <div className="spacer"/>
        
        <div className="button_layer">
              <div className="hspacer"/>
                      <Button 
                            className="button"
                            tag={Link}
                            to={"/vehicle" } 
                            size="lg" 
                            active>
                    Start Again
                    </Button>{' '}
                    <Button 
                            className="button"
                            onClick={navigateToSummary}
                            size="lg" 
                            active>
                      Accept
                    </Button>{' '}
          <div className="hspacer"/>
      </div>
      <Footer/>
    </div>
  );
}

export default Confirmation;
