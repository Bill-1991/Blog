import React from 'react'
import { Navbar, Row, Button} from "react-bootstrap"
import { Link } from "react-router-dom"



const NavBar = (props) => {
  return (
    <Row>
          <Navbar  className='nav' style={{backgroundColor: "blue"}} sticky="top">
             <div className='gen-nav' style={{alignSelf: props.collapse === true ? "start" : "center"}}>
                <h4>{"( B ) E-Quality"}</h4>
                <div className='d-flex' style={{gap: "5px"}}>
                <Link to="/"><Button className="gohome">Home</Button></Link>
                <Link to="/anime"><Button>Animelist</Button></Link>
                </div>
                </div>
          {props.loggedIn === false ?
                <div className='log-out'>
                <Link to="/signin"><Button className="gosignin">Sign in</Button></Link>
                <Link to="/login"><Button className="gologin">Log in</Button></Link>
                </div> :
                 <div className='log-in'>
                 <p>{props.loggedInUser.username}</p>
                 <div className='nav-collapse'>
                 <button onClick={props.handleCollapse} style={{border: "none"}}><img style={{width: "40px", height: "40px", borderRadius: "100%"}} src={props.image} alt="me"/></button>
                 <div className="on-collapse" style={{display: props.collapse === false ? "none" : "block"}}>
                 <Link to="/"><Button style={{position: "relative", border: "none", right: "10px"}}><p>Profile</p></Button></Link>
                 <Link to="/"><Button style={{position: "relative", border: "none", right: "10px"}}><p>Stuff</p></Button></Link>
                 <Link to="/"><Button style={{position: "relative", border: "none", right: "10px"}} onClick={props.handleLoggedOut}><p>Log out</p></Button></Link> 
                 </div>
                 </div>
                 </div>
                }
                </Navbar>
                </Row>
  )
}

export default NavBar

