import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
// import CardGroup from 'react-bootstrap/CardGroup'
// import Card from 'react-bootstrap/Card'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import { getPayload } from '../helpers/auth.js'
import { Modal } from 'react-bootstrap'
import LoginBox from '../auth/LoginBox.js'
// import Logo from "../Logo.js"
// import Register from '../auth/Register.js'
// import Login from '../auth/Login.js'

const Home = () => {

  const history = useHistory()


  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false 
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }

  const handleClick = () => {
    if (!userIsAuthenticated()) {
      console.log('not authenticated')
      handleShow()
    } else {
      console.log('authenticated')
      history.push('/joingame')
    }
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  return (
    <>
      <div>

        {/* <Login /> 
        <Register /> */}

        <Modal 
                    size="lg"
                    show={show} 
                    onHide={handleClose}>
                    <Modal.Header>
                      <Modal.Title>Please log in to suggest a drink</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <LoginBox 
                        path = '/joingame'
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
          </Modal>

          <div className='paragraph'>

            <Link to="/register">
              <Button variant='warning' className="button">Join Our Community</Button>{' '}
            </Link>

            <Container fluid className='hero'>
          <div className='hot'>
            <div>
              <div className='paragraph'>
                <div className='hero-buttons'>
                  <Modal 
                    size="lg"
                    show={show} 
                    onHide={handleClose}>
                    <Modal.Body>
                      <LoginBox 
                        path = '/joingame'
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </Container>

          </div>

          

      </div>
    </>     
  )
}
export default Home