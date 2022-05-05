import React ,{ useState} from "react";
import "./Vehicle.css";
import "../button_layer/ButtonLayer.css"
import { Button } from "reactstrap";
import {Link,useLocation,useNavigate} from 'react-router-dom';
import { faCar } from '@fortawesome/free-solid-svg-icons'
import BulletinBoard from '../s0_bulletin/BulletinBoard';
import Footer from '../footer/Footer';
import WelcomeBar from '../s0_welcome/WelcomeBar';
import IconLayer from "../s0_icon_layer/IconLayer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Vehicle() {
  const [customer, setCustomer] = useState()
  const location = useLocation();
  let navigate = useNavigate();

  const [vehicle, setVehicle] = useState()  
  const vehicleList = [
    {id:1,make:"Mitsubihsi",model:"Lancer",regNumber:"R-2334"},
    {id:2,make:"Suzuki",model:"Khyber",regNumber:"R-2993"},
    {id:3,make:"Honda",model:"CD-70",regNumber:"K-1997"}
  ]

  const navigateToVehicle = (e) => {
    e.preventDefault();   
    let path = '/vehicle';
    setVehicle(undefined);
    navigate(path,{state:{customer:customer,
      vehicle:vehicle}});
  } 

  const navigateToParking = (e) => {
    e.preventDefault();   
    if(vehicle){
    let path = '/parking';
    navigate(path,{state:{customer:customer,
      vehicle:vehicle}});
    }
    else{
      toast.error('Vehicle not selected..!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"colored"
        });
    }
  } 

  return (
    <div className="vehicle">
      <BulletinBoard /> 
      <WelcomeBar/>
      <IconLayer icon={faCar}/>

      <div className="vspacer"/>
      {vehicleList.map((item,index)=>{        
        if(vehicle && vehicle.id == item.id){
        return <div id={index} className= 'item_selected' onClick={(e)=>setVehicle(vehicleList[e.target.id])}>
        {item.make} {item.model}, {item.regNumber}
        </div> 
        }
        else{
         return  <div id={index} className= 'item' onClick={(e)=>setVehicle(vehicleList[e.target.id])}>
        {item.make} {item.model}, {item.regNumber}
        </div>
        }
      })}
        <div className="vspacer"/>
        
        <div className="button_layer">
              <div className="hspacer"/>
                      <Button 
                            className="button"
                            tag={Link}
                            to={"/vehicle" } 
                            size="lg" 
                            active>
                    Start Again
                    </Button>{' '}
                    <Button 
                            className="button" 
                            size="lg" 
                            onClick={navigateToParking}
                            active>
                      Accept
                    </Button>{' '}
          <div className="hspacer"/>
      </div>
      <Footer/>
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

export default Vehicle;
