import React from "react";
import {Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Draggable from "react-draggable";
import './ModalExample.css';
import { Button, Image } from 'react-bootstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    return (
      <div>
        <Button className = "btn-line" onClick={this.toggle} style={{backgroundColor:"#ffffff00", padding:'0px',width:"90px",height:"90px",border:"none",textAlign:"center"}}>
          {this.props.buttonLabel}
        </Button>
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle} className="handle">
              QR Code
            </ModalHeader>
            <ModalBody style={{textAlign:"center"}}>
            <Image className ="modal_image" src="https://ifh.cc/g/Ls9iPv.jpg" style={{textAlign:"center"}}></Image>
            </ModalBody>
            <ModalFooter>
              
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Draggable>
      </div>
    );
  }
}

export default ModalExample;
