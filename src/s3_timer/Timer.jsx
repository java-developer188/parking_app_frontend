import React from "react";
import "./Timer.css";
import { Button } from "reactstrap";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

function Timer() {
  return (
    <div className="timer">
      <div className="icon_layer">
        <div className="icon_dot">
            <FontAwesomeIcon icon={faClock} />
        </div>
      </div>
      <div className="spacer"/>
      
        <div className="item" onClick={()=>alert("Custom selected")}>
          Custom
        </div> 
        <div className="item" onClick={()=>alert("60 min selected")}>
         60 minutes
        </div>    
        <div className="item" onClick={()=>alert("30 min selected")}>
          30 minutes
        </div> 
        <div className="item" onClick={()=>alert("15 min selected")}>
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
                            tag={Link}
                            to={"/confirmation" } 
                            size="lg" 
                            active>
                      Accept
                    </Button>{' '}
          <div className="hspacer"/>
      </div>
    </div>
  );
}

export default Timer;
