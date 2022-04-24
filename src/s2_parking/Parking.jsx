import React ,{ useState} from "react";
import "./Parking.css";
import { Button } from "reactstrap";
import {Link, useLocation,useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareParking } from '@fortawesome/free-solid-svg-icons'
import BulletinBoard from '../s0_bulletin/BulletinBoard';
import Footer from '../footer/Footer';
import WelcomeBar from '../s0_welcome/WelcomeBar';

function Parking() {
  const location = useLocation();
  const [customer, setCustomer] = useState({...location.state.customer})
  const [parking, setParking] = useState()
  let navigate = useNavigate();

  const navigateToTimer = (e) => {
    e.preventDefault();   
    let path = '/timer';
    navigate(path,{state:{customer:customer,parking:parking}});
  } 

  return (
    <div className="parking">
      <BulletinBoard /> 
      <WelcomeBar/>
      <div className="icon_layer">
        <div className="icon_dot">
            <FontAwesomeIcon icon={faSquareParking} />
        </div>
      </div>
      <div className="spacer"/>
      <div id="item1" className= 'item' onClick={(e)=>setParking({id:e.target.id,parking:e.target.textContent})}>
        Zone 1, North Town
        </div> 
        <div id="item2" className= 'item' onClick={(e)=>setParking({id:e.target.id,parking:e.target.textContent})}>
         Zone 2, South Town
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
                            size="lg"
                            onClick={navigateToTimer} 
                            active>
                      Accept
                    </Button>{' '}
          <div className="hspacer"/>
      </div>
      <Footer/>
    </div>
  );
}

export default Parking;
