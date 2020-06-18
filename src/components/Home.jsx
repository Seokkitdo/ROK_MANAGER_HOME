import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, container, Accordion, Card, Button } from 'react-bootstrap';
import './Home.css';
import ReactPlayer from 'react-player'


export default class Home extends Component {
  state = { watch: false }
  video = () => {
    return (
      <div>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=7C2z4GqqS5E' playing controls />
      </div>
    )
  }
  moveLink = () => {
    console.log("sadsadsadasdasdasdasdasd")
    //현재창에서 다른페이지로 이동합니다.
    window.location.href = "https://rokregister.bearbear.co.kr";
  }
  moveLink_naver =() => {
    console.log("abcde")
    window.location.href = "https://www.naver.com/";
  }


  onclickVideo = () => {
    console.log("sadsadsadasdasdasdasdasd")
    this.setState({ watch: !this.state.watch })
  }

  render() {
    return (
      <container>
        <Jumbotron>
          <h2>Welcome to ROK-MANAGER</h2>
          <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
          <Button bsStyle="primary" onClick={() => this.onclickVideo()} >Watch Demo Video</Button>
          <Button className="btn-primary2" onClick={() => this.moveLink()}>Go to Site</Button>


          {this.state.watch && <div className='wrapper'>
            <ReactPlayer

              className='player'
              width='100%'
              height='100%'
              playing
              url='https://www.youtube.com/watch?v=2S24-y0Ij3Y' playing controls />
          </div>}
          <br />
          <br />
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Click me!
              </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>




            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Click me!
              </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Click me!
              </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Click me!
              </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Click me!
              </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Click me!
              </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                  Click me!
              </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <br/>
          <br/>
          <button  className="radius_button"><img width = "100px" height="100px" src="https://lh3.googleusercontent.com/proxy/YtAdBsf_EkkE9Op-NJB9XTyOieMNLkX7zEJa0omu_Wyaddi8-mXtOSSsgLSA3XkZ6JXHeZvj2mwwyObbv6iVWFBDgwYNL4ksbSFEZPwPk_mcCmoloczOZ2Ry6cecMwmx3ahqslFSdDTJHOXghsd-vz1H9vaBPM8phQm2An9LR0JwCaRHoe9IwHJgb721O5VtstoQ1cXmuFJbTnLuDUF0nvZMVPxERxfNYff5LtqU7Ui7s5fS9VZIcrbv2I0Ea5b-_0an0MreFwTVsQJsjn-FsrCwjzilTjFZRaZz8rNec37vNi06FvVbF-rfqmZmBoRPOZQIW-HoPTvsSaoiYDGv8RtEtWeeku5ABGaBEZ8" alt="my image" onClick={this.moveLink_naver} /></button>
        </Jumbotron>
        
      </container>
    )
  }
}
