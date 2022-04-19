import React from "react";
import "./Summary.css";
import { Button } from "reactstrap";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Summary() {
  return (
    <div className="summary">
      <div className="icon_layer">
        <div className="icon_dot">
            <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>
      <div className="spacer"/>
     
        <div className="item">
          <p>Suzuki Khyber , R-2993</p>
          <p>Zone 1, North Town</p>
          <p>1 hour</p>
          <p><b>Your total is : 6.00$</b></p>
        </div> 
        
        
        
    </div>
  );
}

export default Summary;
