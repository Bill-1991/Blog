import React from 'react'


const Home = (props) => {
  
  
  return (
    <div id="/" className='mt-4 home'>
      
      
          {props.loggedIn ?  
          <h2 style={{fontFamily: "italic"}}>Welcome {props.loggedInUser.username}! Take a look at our hottest picks for today!!!</h2>
           :
          <div style={{fontFamily: "italic"}}>
          <h2>Welcome! Check out our hottest picks for today!!!</h2>
          <h5>We recommend signing or logging in for a better experience!</h5>
          </div>
        }
        
    </div>
  )
}

export default Home