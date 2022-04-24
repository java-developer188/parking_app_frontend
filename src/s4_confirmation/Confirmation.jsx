import React ,{useState}from "react";
import "./Confirmation.css";
import { Button } from "reactstrap";
import {Link ,useLocation,useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import BulletinBoard from '../s0_bulletin/BulletinBoard';
import Footer from '../footer/Footer';
import WelcomeBar from '../s0_welcome/WelcomeBar';

function Confirmation() {
  const location = useLocation();
  const [customer, setCustomer] = useState({...location.state.customer})
  const [parking, setParking] = useState({...location.state.parking})
  const [time, setTime] = useState({...location.state.time})
  let navigate = useNavigate();

  const navigateToSummary = (e) => {
    e.preventDefault();   
    let path = '/summary';
    navigate(path,{state:{customer:customer,parking:parking,time:time}});
  } 
  return (
    <div className="confirmation">
      <BulletinBoard /> 
      <WelcomeBar/>
      <div className="icon_layer">
        <div className="icon_dot">
            <FontAwesomeIcon icon={faChartLine} />
        </div>
      </div>
      <div className="spacer"/>
     
        <div className="item">
          {customer.vehicle}
        </div> 
        <div className="item">
          {parking.parking}
        </div>    
        <div className="item">
          {time.time}
        </div> 
        <div className="spacer"/>
        
        <div className="button_layer">
              <div className="hspacer"/>
                      <Button 
                            className="button"
                            tag={Link}
                            to={"/" } 
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
