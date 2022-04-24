import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Vehicle from './s1_vehicle/Vehicle';
import Parking from './s2_parking/Parking';
import Timer from './s3_timer/Timer';
import Confirmation from './s4_confirmation/Confirmation';
import Summary from './s5_summary/Summary';
import React from 'react'

import Login from './login/Login';
import Register from './registration/Register';

const App = () => {
return (
  <div className='App'>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/vehicle" element={<Vehicle />}  />
          <Route path="/parking" element={<Parking />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/confirmation" element={<Confirmation/>}/>
          <Route path="/summary" element={<Summary />}/>
        </Routes>
  </BrowserRouter>
  </div>
)
}

export default App
