import React from 'react'
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Anime = (props) => {

  return (
    <Row id="anime">
        {props.animeList.map(anime => 
            <Col key={anime.id} sm={6} md={4} lg={3}><Card style={{backgroundColor: "black", textAlign: "center"}}>
                <Link to="/anime/ao-ashi"><Card.Img src={anime.attributes.posterImage.small} alt={anime.attributes.abbreviatedTitles[0]}/></Link>
                <Card.Body>
                    <Card.Title>{anime.attributes.abbreviatedTitles[0]}</Card.Title>
                </Card.Body>
            </Card>
            </Col>
            )}
    </Row>
  )
}

export default Anime