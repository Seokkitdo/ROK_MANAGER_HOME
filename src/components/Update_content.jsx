import React, { Component } from 'react'
import { container, Card } from 'react-bootstrap';
import './Update_content.css';
import ModalExample from './ModalExample.jsx';
export default class Update_content extends Component {
    render() {
        return (
            <div>
                <container>
                    <Card className="card_center" style={{ width: '90%', maxWidth: '1000px', height: '40rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <br/>
                    <br/>
                    <br/>
                    
                    <div className="bottom_align">
                        <h1 style={{ color: "#ffffff", fontSize: "1.5rem", paddingTop: "20px" }}>Contact us: star940103@kakao.com</h1>
                        <ModalExample buttonLabel={<img src="https://seeklogo.net/wp-content/uploads/2018/10/line-logo.png" style={{ width: "90px", border: "none", textAlign: "center" }}></img>}> </ModalExample>
                    </div>
                </container>
            </div>
        )
    }
}
