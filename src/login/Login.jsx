import React ,{ useState} from 'react'
import { Link ,BrowserRouter} from 'react-router-dom'
import { Button,Form ,FormGroup,Input,InputGroup,InputGroupText} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock , faUser} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "../button_layer/ButtonLayer.css"

const Login = () => {

  const [username, setUsername] = useState()

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();   
    let path = '/vehicle';
    console.log(path)
    navigate(path,{state:{id:1,username:username}});
  } 


  return (
    <div className='login_container'>
      <div className='internal_container'>
        <div className='login'>
        <div className='box_heading'>
            Login
            <p>Sign In to your account</p>
          </div>
        <Form className='login_form'  onSubmit={handleSubmit}>
        <InputGroup className='login_username'>
      <Input
        id="username"
        placeholder="Username"
        type="text"
        onChange={event =>{console.log(event.target.value); setUsername(event.target.value)}}
      />
      <InputGroupText>
      <FontAwesomeIcon icon={faUser} />
      </InputGroupText>
    </InputGroup>
    
    <InputGroup className='login_password'>
      <Input
        id="password"
        placeholder="Password"
        type="password"
      />
      <InputGroupText>
      <FontAwesomeIcon icon={faLock} />
      </InputGroupText>
    </InputGroup>
    <div className="button_layer">
                <div className="hspacer"/>
                      <Button className='button'>
                           Login
                        </Button>
                <div className="hspacer"/>
        </div>
  </Form>
        </div>
        <div className='register_div box_heading'>
          Sign Up 
          <p>If you have not registered yourself yet, please do so now by following this link.
                       Thank you!</p>
          <nav>
            <Link to="/">Register Now !</Link>
            {/* <p> Register Now !</p> */}
          </nav>
        </div>
        <div className='register_link'>
          <nav>
            <Link to="/">Register</Link>
            {/* <p> Register</p> */}
          </nav>
        </div> 
      </div>
    </div>

  )
}

export default Login
