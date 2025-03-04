import React from 'react'
import { Col, Row, Container, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>

      {/* first section  */}

      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly'>
        <Row>
          <Col>
            <h3 className='textStyle'>WELCOME TO <span className='text-warning'>MEDIA PLAYER</span></h3>
            <p className='textStyle mt-3' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eius quidem unde natus tempore sunt cum dolor reiciendis architecto optio beatae, explicabo suscipit cumque excepturi recusandae reprehenderit dolore dignissimos necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cum, aut neque perspiciatis aspernatur harum aperiam soluta consequatur pariatur expedita corrupti blanditiis dolorem ipsam excepturi labore eius. Doloremque, minus amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro veritatis corporis accusamus! Vero temporibus deleniti rem accusamus voluptatibus iusto soluta veritatis, vitae voluptatem quidem dolor amet, repudiandae laborum repellendus?</p>
            <Link to={'/home'}><button className='btn btn-warning mt-3'>Get Started<i className="fa-solid fa-arrow-right ms-2"></i></button></Link>
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" width={'400px'} className='ms-5' />
          </Col>
        </Row>
      </Container>

      {/* second section */}

      <div className="container">
        <h3 className='textStyle'>FEATURES</h3>
        <div className='d-flex align-items-center justify-content-evenly mt-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>ADD VIDEOS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}><Button variant="warning">Add Video</Button></Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>VIEW VIDEOS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}><Button variant="warning">View Video</Button></Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>WATCH HISTORY</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/watch'}> <Button variant="warning">View Watch History</Button></Link>
            </Card.Body>
          </Card>
        </div>
      </div>
       {/* third section  */}

       <div className="container textStyle mt-5 mb-5 border border-2 border-secondary rounded p-5">
          <Row>
            <Col>
            <h3>SIMPLE AND POWERFUL</h3>
            <p><span className='fs-5 fw-bolder'>Play Everything:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestias asperiores temporibus sapiente libero. Fuga consequuntur rem ut amet veritatis obcaecati perferendis repellat laborum voluptates accusamus? Eius ullam aperiam voluptates?</p>
            <p><span className='fs-5 fw-bolder'>Play Everything:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestias asperiores temporibus sapiente libero. Fuga consequuntur rem ut amet veritatis obcaecati perferendis repellat laborum voluptates accusamus? Eius ullam aperiam voluptates?</p>
            <p><span className='fs-5 fw-bolder'>Play Everything:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestias asperiores temporibus sapiente libero. Fuga consequuntur rem ut amet veritatis obcaecati perferendis repellat laborum voluptates accusamus? Eius ullam aperiam voluptates?</p>

            </Col>
            <Col>
            <div>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/yUhofHpi8bc" title="Dhurooha Manthahasame | Sookshmadarshini | Nazriya Nazim | Basil Joseph | MC | Christo Xavier |Mu.Ri" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </Col>
          </Row>
        </div>
    </>
  )
}

export default LandingPage