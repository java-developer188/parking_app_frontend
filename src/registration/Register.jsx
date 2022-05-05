import React ,{ useState} from 'react'
import { Link ,BrowserRouter} from 'react-router-dom'
import { Button,Form ,FormGroup,Input,InputGroup,InputGroupText} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock , faUser ,faAt} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import "./Register.css";
import "../button_layer/ButtonLayer.css"

const Register = () => {

  const [username, setUsername] = useState()

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();   
  
  } 


  return (
    <div className='register_container'>
      <div className='register'>
      <div className='box_heading'>
          Register
          <p>Create your account</p>
        </div>
      <Form className='register_form'  onSubmit={handleSubmit}>
     <InputGroup className='reg_username'>
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

    <InputGroup className='reg_email'>
      <Input
        id="email"
        placeholder="Email"
        type="text"
      />
      <InputGroupText>
      <FontAwesomeIcon icon={faAt} />
      </InputGroupText>
    </InputGroup>

    <InputGroup className='reg_password'>
      <Input
        id="password"
        placeholder="Password"
        type="password"
      />
      <InputGroupText>
      <FontAwesomeIcon icon={faLock} />
      </InputGroupText>
    </InputGroup>
    
    <InputGroup className='reg_cpassword'>
      <Input
        id="cpassword"
        placeholder="Repeat Password"
        type="password"
      />
      <InputGroupText>
      <FontAwesomeIcon icon={faLock} />
      </InputGroupText>
    </InputGroup>
  
  
  <div className="button_layer">
              <div className="hspacer"/>
                      <Button className='button'>
                        Register
                      </Button> 
          <div className="hspacer"/>
      </div>
</Form>
</div>
    </div>
  )
}

export default Register
