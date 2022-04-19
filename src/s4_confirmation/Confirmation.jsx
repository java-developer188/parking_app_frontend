import React from "react";
import "./Confirmation.css";
import { Button } from "reactstrap";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

function Confirmation() {
  return (
    <div className="confirmation">

      <div className="icon_layer">
        <div className="icon_dot">
            <FontAwesomeIcon icon={faChartLine} />
        </div>
      </div>
      <div className="spacer"/>
     
        <div className="item">
          Suzuki Khyber , R-2993
        </div> 
        <div className="item">
          Zone 1, North Town
        </div>    
        <div className="item">
          1 hour
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
                            to={"/summary" } 
                            size="lg" 
                            active>
                      Accept
                    </Button>{' '}
          <div className="hspacer"/>
      </div>
    </div>
  );
}

export default Confirmation;
