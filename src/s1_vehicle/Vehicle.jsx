import React ,{ useState} from "react";
import "./Vehicle.css";
import '../s0_icon_layer/IconLayer.css';
import "../button_layer/ButtonLayer.css"
import { Button } from "reactstrap";
import {Link,useLocation,useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import BulletinBoard from '../s0_bulletin/BulletinBoard';
import Footer from '../footer/Footer';
import WelcomeBar from '../s0_welcome/WelcomeBar';

function Vehicle() {
  const [customer, setCustomer] = useState()
  const location = useLocation();
  let navigate = useNavigate();

  const navigateToParking = (e) => {
    e.preventDefault();   
    let path = '/parking';
    navigate(path,{state:{customer:customer}});
  } 

  return (
    <div className="vehicle">
      <BulletinBoard /> 
      <WelcomeBar/>
      <div className="icon_layer">
        <div className="icon_dot">
            <FontAwesomeIcon icon={faCar} />
        </div>
      </div>
      <div className="vspacer"/>
      <div id="item1" className= 'item' onClick={(e)=>setCustomer({id:e.target.id,vehicle:e.target.textContent})}>
        Mitsubihsi Lancer, R-2334 
        </div> 
        <div id="item2"className="item" onClick={(e)=>setCustomer({id:e.target.id,vehicle:e.target.textContent})}>
          Suzuki Khyber , R-2993
        </div> 
        <div id="item3" className="item" onClick={(e)=>setCustomer({id:e.target.id,vehicle:e.target.textContent})}>
          Honda Cd-7-, K-1997
        </div>    
        <div className="vspacer"/>
        
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
                            size="lg" 
                            onClick={navigateToParking}
                            active>
                      Accept
                    </Button>{' '}
          <div className="hspacer"/>
      </div>
      <Footer/>
    </div>
  );
}

export default Vehicle;
