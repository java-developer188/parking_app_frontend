import React from "react";
import { Button } from "reactstrap";
import "./ButtonLayer.css";

function ButtonLayer() {
  return (
    <div className="button_layer">
      <Button variant="primary" size="lg" active>
    Start Again
  </Button>{' '}
  <Button variant="primary" size="lg" active>
    Accept
  </Button>
        </div>
  );
}

export default ButtonLayer;
