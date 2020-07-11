import React, { Component } from 'react'
import { Jumbotron, container, Accordion, Card, Button, Modal } from 'react-bootstrap';
import './Home.css';
import ReactPlayer from 'react-player'
import Maincomponent from './MainComponent';
import { withTranslation } from 'react-i18next';
import ModalExample from './ModalExample.jsx';


class Home extends Component {
  state = { watch: false }
  video = () => {
    return (
      <div>
        <ReactPlayer
          url='https://youtu.be/8n5-E9uIl0o' playing controls />
      </div>
    )
  }
  moveLink = () => {
    console.log("sadsadsadasdasdasdasdasd")
    //현재창에서 다른페이지로 이동합니다.
    window.location.href = "https://rokregister.bearbear.co.kr";
  }
  moveLink_naver = () => {
    console.log("abcde")
    window.location.href = "https://www.naver.com/";
  }


  onclickVideo = () => {
    console.log("sadsadsadasdasdasdasdasd")
    this.setState({ watch: !this.state.watch })
  }

  render() {
    const { t } = this.props
    return (
      <container>
{/* 
        <div className="translation_drop">
          <Maincomponent></Maincomponent>

        </div> */}
        <Jumbotron>
          <h2>{t('head.title')}</h2>
          <p>{t('rok.manager.description')}</p>
          <Button bsStyle="primary" onClick={() => this.onclickVideo()} >Watch Demo Video</Button>
          <Button className="btn-primary2" onClick={() => this.moveLink()}>Go to Site</Button>


          {this.state.watch && <div className='wrapper'>
            <ReactPlayer

              className='player'
              width='100%'
              height='100%'
              playing
              url='https://www.youtube.com/embed/aEQP6-Gss3c' playing controls />
          </div>}
          <br />
          <br />
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ textAlign: "center" }}>
                  {t('Accodion.1')}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body >{t('Accodion.1.context')}</Card.Body>
              </Accordion.Collapse>
            </Card>





            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{ textAlign: "left" }}>
                  {t('Accodion.2')}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body >{t('Accodion.2.context')}</Card.Body>
              </Accordion.Collapse>
            </Card>



            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{ textAlign: "left" }}>
                  {t('Accodion.3')}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body style={{ textAlign: "left" }}>{t('Accodion.3.context')}</Card.Body>
              </Accordion.Collapse>
            </Card>




            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4" style={{ textAlign: "left" }}>
                  {t('Accodion.4')}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>{t('Accodion.4.context')}</Card.Body>
              </Accordion.Collapse>
            </Card>




            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5" style={{ textAlign: "left" }}>
                  {t('Accodion.5')}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body>{t('Accodion.5.context')}</Card.Body>
              </Accordion.Collapse>
            </Card>


            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6" style={{ textAlign: "left" }}>
                  {t('Accodion.6')}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body>{t('Accodion.6.context')}</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="7" style={{ textAlign: "left" }}>
                  {t('Accodion.7')}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">
                <Card.Body>{t('Accodion.7.context')}</Card.Body>
              </Accordion.Collapse>
            </Card>

          </Accordion>
          <br />
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
    <p style={{ fontSize: "25px", fontWeight:"bolder",opacity:"70%" }}>{t('home.report')}</p>
            <img width="90%" style={{maxWidth:"800px"}} src="https://ifh.cc/g/vMMEPP.jpg" />
            <p> &lt; Report from Google Analytics &gt;</p>
          </div>
          
        </Jumbotron>
      </container>
    )
  }
}
export default withTranslation()(Home);