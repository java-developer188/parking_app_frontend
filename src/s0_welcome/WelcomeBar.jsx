import React from "react";
import './WelcomeBar.css';

function WelcomeBar() {
  return (
    <div className="welcome_bar">
            <div className="left">
                <div className="town_heading">
                                Welcome to North Nazimabad
                </div>
                <div className="username">Syed Sibte Haider</div>
            </div>
            <div className="parking_label">Parking</div>
    </div>
  );
}

export default WelcomeBar;
