import React ,{ useState}  from "react";
import "./Timer.css";
import { Button } from "reactstrap";
import {Link ,useLocation ,useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import BulletinBoard from '../s0_bulletin/BulletinBoard';
import Footer from '../footer/Footer';
import WelcomeBar from '../s0_welcome/WelcomeBar';

function Timer() {
  const location = useLocation();
  const [customer, setCustomer] = useState({...location.state.customer})
  const [parking, setParking] = useState({...location.state.parking})
  const [time, setTime] = useState()
  let navigate = useNavigate();

  const navigateToConfirmation = (e) => {
    e.preventDefault();   
    let path = '/confirmation';
    navigate(path,{state:{customer:customer,parking:parking,time:time}});
  } 

  return (
    <div className="timer">
      <BulletinBoard /> 
      <WelcomeBar/>
      <div className="icon_layer">
        <div className="icon_dot">
            <FontAwesomeIcon icon={faClock} />
        </div>
      </div>
      <div className="spacer"/>
      
        <div id="item1" className= 'item' onClick={(e)=>setTime({id:e.target.id,time:e.target.textContent})}>
          Custom
        </div> 
        <div id="item2" className= 'item' onClick={(e)=>setTime({id:e.target.id,time:e.target.textContent})}>
         60 minutes
        </div>    
        <div id="item3" className= 'item' onClick={(e)=>setTime({id:e.target.id,time:e.target.textContent})}>
          30 minutes
        </div> 
        <div id="item4" className= 'item' onClick={(e)=>setTime({id:e.target.id,time:e.target.textContent})}>
         15  minutes
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
                            onClick={navigateToConfirmation}
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

export default Timer;
