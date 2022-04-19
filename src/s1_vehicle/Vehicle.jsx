import React from "react";
import "./Vehicle.css";
import '../s0_icon_layer/IconLayer.css';
import "../button_layer/ButtonLayer.css"
import { Button } from "reactstrap";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'

function Vehicle() {
  
  return (
    <div className="vehicle">
      <div className="icon_layer">
        <div className="icon_dot">
            <FontAwesomeIcon icon={faCar} />
        </div>
      </div>
      <div className="vspacer"/>
      <div className="item" onClick={()=>alert("Mitsubihsi")}>
        Mitsubihsi Lancer, R-2334
        </div> 
        <div className="item" onClick={()=>alert("Suzuki")}>
          Suzuki Khyber , R-2993
        </div> 
        <div className="item" onClick={()=>alert("Honda")}>
          Honda Cd-7-, K-1997
        </div>    
        <div className="vspacer"/>
        
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
                            tag={Link}
                            to={"/parking" } 
                            size="lg" 
                            active>
                      Accept
                    </Button>{' '}
          <div className="hspacer"/>
      </div>
    </div>
  );
}

export default Vehicle;
