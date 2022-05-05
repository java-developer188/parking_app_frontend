import React ,{ useState}  from "react";
import "../App.css";
import { Button } from "reactstrap";
import {Link ,useLocation ,useNavigate} from 'react-router-dom';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import BulletinBoard from '../s0_bulletin/BulletinBoard';
import Footer from '../footer/Footer';
import WelcomeBar from '../s0_welcome/WelcomeBar';
import IconLayer from "../s0_icon_layer/IconLayer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Timer() {
  const location = useLocation();
  const [customer, setCustomer] = useState({...location.state.customer})
  const [vehicle, setVehicle] = useState({...location.state.vehicle})  
  const [parking, setParking] = useState({...location.state.parking})
  const [time, setTime] = useState()
  let navigate = useNavigate(); 
  const timeList = [
    {id:1,desc:"Custom",value:0,units:""},
    {id:2,desc:"60 Minutes",value:60,units:"min"},
    {id:3,desc:"30 Minutes",value:30,units:"min"},
    {id:4,desc:"15 Minutes",value:15,units:"min"}
  ]

  const navigateToConfirmation = (e) => {
    e.preventDefault();   
    if(time){
    let path = '/confirmation';
    navigate(path,{state:{customer:customer,
      vehicle:vehicle,
      parking:parking,
      time:time}});
    }
    else{
      toast.error('Time not selected..!', {
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
    <div className="timer">
      <BulletinBoard /> 
      <WelcomeBar/>
      <IconLayer icon={faClock} />
        
      <div className="spacer"/>
      {timeList.map((item,index)=>{        
        if(time && time.id == item.id){
        return <div id={index} className= 'item_selected' onClick={(e)=>setTime(timeList[e.target.id])}>
        {item.desc}
        </div>
        }
        else{
         return  <div id={index} className= 'item' onClick={(e)=>setTime(timeList[e.target.id])}>
        {item.desc}
        </div>
        }
      })}
      <div className="spacer"/>
        
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
                            onClick={navigateToConfirmation}
                            size="lg" 
                            active={!!time? true:false}
                            disabled={!! time? false:true}>
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

export default Timer;
