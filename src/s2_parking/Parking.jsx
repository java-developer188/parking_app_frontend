import React, { useState } from "react";
import "./Parking.css";
import { Button } from "reactstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { faSquareParking } from "@fortawesome/free-solid-svg-icons";
import BulletinBoard from "../s0_bulletin/BulletinBoard";
import Footer from "../footer/Footer";
import WelcomeBar from "../s0_welcome/WelcomeBar";
import IconLayer from "../s0_icon_layer/IconLayer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Parking() {
  const location = useLocation();
  const [customer, setCustomer] = useState({ ...location.state.customer });
  const [vehicle, setVehicle] = useState({ ...location.state.vehicle });
  const [parking, setParking] = useState();
  const parkingList = [
    { id: 1, parking: "Zone 1 Downtown",rate:"2",rateUnit:"hr",maxTime:"2",maxUnit:"hr" },
    { id: 2, parking: "Zone 2 Industrial",rate:"1.53",rateUnit:"hr",maxTime:"4",maxUnit:"hr"},
  ];

  let navigate = useNavigate();
  const navigateToTimer = (e) => {
    e.preventDefault();
    if (parking) {
      let path = "/timer";
      navigate(path, {
        state: { customer: customer, vehicle: vehicle, parking: parking },
      });
    } else {
      toast.error("Parking not selected..!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="parking">
      <BulletinBoard />
      <WelcomeBar />
      <IconLayer icon={faSquareParking} />

      <div className="spacer" />
      {parkingList.map((item, index) => {
        if (parking && parking.id == item.id) {
          return (
            <div
              id={index}
              className="item_selected"
              onClick={(e) => setParking(parkingList[e.target.id])}
            >
              {item.parking+" $ "+item.rate+"/"+item.rateUnit+" Max "+item.maxTime+" "+item.maxUnit}
            </div>
          );
        } else {
          return (
            <div
              id={index}
              className="item"
              onClick={(e) => setParking(parkingList[e.target.id])}
            >
             {item.parking+" $ "+item.rate+"/"+item.rateUnit+" Max "+item.maxTime+" "+item.maxUnit}
            </div>
          );
        }
      })}
      <div className="spacer" />

      <div className="button_layer">
        <div className="hspacer" />
        <Button className="button" tag={Link} to={"/vehicle"} size="lg" active>
          Start Again
        </Button>{" "}
        <Button
          className="button"
          size="lg"
          onClick={navigateToTimer}
          active={!!parking ? true : false}
          disabled={!!parking ? false : true}
        >
          Accept
        </Button>{" "}
        <div className="hspacer" />
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Parking;
