import React from 'react'
import { Row, Col, Container } from "react-bootstrap"



  const AoAshi = (props) => {
  
  return (
    <Row id="ao-ashi">
       <Container>
       <Row>
            <Col sm={6} md={4} lg={3}>
                <img style={{width: "100%", height: "100%"}} src={props.animeList[0].attributes.posterImage.large} alt="Ao ashi" />
            </Col>
            <Col className='d-grid' sm={6} md={8} lg={9}>
            <h2>{props.animeList[0].attributes.abbreviatedTitles[0]}</h2>
              <p>{props.animeList[0].attributes.description}</p>
              <p>{props.animeList[0].attributes.averageRating}</p>
              <h3>Age-rating: <strong>{props.animeList[0].attributes.ageRating}</strong></h3>
            </Col>
        </Row>
        <div id="chat" style={{width: "100%", alignItems: "end", gridTemplateColumns: "50% 50%"}} className='d-grid chatRoom'>
        <div>
            <h1>{props.loggedInUser.username}</h1>
        </div>
        <div>
            <div className="messages" style={{width: "100%"}}>
                {props.chatRoom.map(user => <div className='mt-2' style={{display: "flex"}}>
                   <img style={{borderRadius: "100%", width: "10%", height: "100%"}} src={user.image} alt="image" />
                   <p style={{width: "70%", height: "100%", alignSelf: "center"}}>{user.message}</p>
                   <button style={{width: "20%", justifySelf: "flex-end"}}>delete</button>
                </div>)}
            </div>
            <div style={{position: "relative", width: "100%", height: "50px"}} className='d-flex submit'>
                <textarea style={{width: "100%"}} onChange={props.handleMessage} type="text" placeholder="Write here"></textarea>
                <button style={{height: "50px", position: "absolute", right: "0"}} onClick={props.handleChatRoom}>Send</button>
            </div>
        </div>
        </div>
       </Container>
    </Row>
  )
}

export default AoAshi