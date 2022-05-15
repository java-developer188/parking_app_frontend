import React from "react";
import './WelcomeBar.css';

function WelcomeBar() {
  return (
    <div className="welcome_bar">
            <div className="left">
                <div className="town_heading">
                                Welcome to Olds, AB
                </div>
                <div className="username">Registered Customer</div>
            </div>
            <div className="parking_label">Parking</div>
    </div>
  );
}

export default WelcomeBar;
