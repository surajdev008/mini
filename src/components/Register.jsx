import './Login.css'
import React,{useState} from "react"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Container ,Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


function Register(){

    const [uname,setUname]=useState("")
    const [pass,setPass]=useState("")
    const navigate = useNavigate('')
    
    const handleUsernameChange = (event) => {
        setUname(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPass(event.target.value);
      };
      const handleLogin=(event)=>
      {
        event.preventDefault();
        alert("you have registered")
        navigate('/')
      }
      
        
      return (
        <div>
            <Navbar bg="secondary" expand="lg" variant="dark">
      <Container >
        <h1 className="tt">TO-DO LIST</h1>
          <Nav className="me-auto">
            <Button variant="light"className="btn" ><Link to='/'>Login</Link></Button>
            <Button variant="light"className="btn" ><Link to='/register'>Register</Link></Button>
            </Nav>
      </Container>
    </Navbar>
    <h3 className="heading2">Please Register</h3>
    <div className="login">
            <form>
            <label>
          Username:
          <input type="text" value={uname} onChange={handleUsernameChange} />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input type="password" value={pass} onChange={handlePasswordChange} />
        </label>
        <br />
        <Button variant="secondary" onClick={handleLogin} >Register</Button>
            </form>
            </div>
        </div>
      );
      
}

 export default Register;