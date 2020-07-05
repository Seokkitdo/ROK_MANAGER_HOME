import React, { Component } from 'react'
import { container, Table } from 'react-bootstrap';
import Router from "next/router";
import './Update.css';
import ModalExample from './ModalExample.jsx';



export default class Update extends Component {
  MovetoContent = () => {
    console.log("sadsadsadasdasdasdasdasd")
    window.location.href = "/Update_content"

    // Router.push("/")

  }
  render() {
    return (
      <div className="margin_table">
        <container>
          <Table responsive>
            <thead>
              <br />
              <tr>
                <th>#</th>
                <th >TITLE</th>

                <th>WRITER</th>
              </tr>
            </thead>

            <tbody>
              <tr onClick={() => this.MovetoContent()}>
                <td>Number</td>
                <td>CONTENT</td>
                <td>NAME</td>
              </tr>

            </tbody>

          </Table>
          
          
        </container>
      </div>
    )
  }
}
