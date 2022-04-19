import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vehicle from './s1_vehicle/Vehicle';
import Parking from './s2_parking/Parking';
import Timer from './s3_timer/Timer';
import Confirmation from './s4_confirmation/Confirmation';
import Summary from './s5_summary/Summary';

import React from 'react'
import BulletinBoard from './s0_bulletin/BulletinBoard';
import Footer from './footer/Footer';
import WelcomeBar from './s0_welcome/WelcomeBar';
import IconLayer from './s0_icon_layer/IconLayer';
import ButtonLayer from './button_layer/ButtonLayer';

const App = () => {
return (
  <div className='App'>
  <Router>
  <BulletinBoard /> 
  <WelcomeBar/>
  <Routes>
    <Route path="/" element={<Vehicle />} />
    <Route path="/parking" element={<Parking />} />
    <Route path="/timer" element={<Timer />} />
    <Route path="/confirmation" element={<Confirmation/>}/>
    <Route path="/summary" element={<Summary />}/>
  </Routes>
  <Footer/>
  </Router>
  </div>
)
}

export default App
