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
        <Button className = "btn-line" onClick={this.toggle}>
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
            <ModalBody>
            <Image className ="modal_image" src="assets/QRCode.jpg"></Image>
            It will jump to Line.
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
