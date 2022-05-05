import React from "react";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function IconLayer(props) {
  return (
    <div className="icon_layer">
        <div className="icon_dot">
        <FontAwesomeIcon icon={props.icon} />
            </div>
    </div>
  );
}

export default IconLayer;
