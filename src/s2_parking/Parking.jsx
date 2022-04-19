import React from "react";
import "./Parking.css";
import { Button } from "reactstrap";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareParking } from '@fortawesome/free-solid-svg-icons'

function Parking() {
  return (
    <div className="parking">
      <div className="icon_layer">
        <div className="icon_dot">
            <FontAwesomeIcon icon={faSquareParking} />
        </div>
      </div>
      <div className="spacer"/>
      <div className="item" onClick={()=>alert("Zone 1 selected")}>
        Zone 1, North Town
        </div> 
        <div className="item" onClick={()=>alert("Zone 2 selected")}>
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
                            tag={Link}
                            to={"/timer" } 
                            size="lg" 
                            active>
                      Accept
                    </Button>{' '}
          <div className="hspacer"/>
      </div>
    </div>
  );
}

export default Parking;
