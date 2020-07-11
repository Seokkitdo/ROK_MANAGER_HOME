import React, { Component } from 'react'
import { container, Table } from 'react-bootstrap';
import Router from "next/router";
import './Update.css';
import ModalExample from './ModalExample.jsx';
import axios from '../api'



export default class Update extends Component {
  state = { board: [] }
  MovetoContent = (article, number) => {
    window.location.href = `/Update_content/${number}`
    // Router.push("/")
  }

  componentDidMount() {
    this.getBoardList();
  }


  getBoardList = async text => {
    try {
      console.log(this.props)

      const response = await axios.get('userresponse/', {
        params: {
          'mode': "ServerBoard_list"
        }
      }
      );
      console.log(response)
      if (response.status === 201) {
        const item = []
        console.log(response.data.info.length)
        for (var i = 0; i < response.data.info.length; i++) {
          item.push({ number: i + 1, title: response.data.info[i].title, article: response.data.info[i].article, type: response.data.info[i].article_type })
        }
        this.setState({ board: item })
      }

    } catch (error) {

    }
  }

  render() {
    console.log(this.state.board)
    let divItems = this.state.board.map((item, index) => {
      console.log(item.article)
      return (
        <tr key={index + 1} onClick={() => this.MovetoContent(item.article, item.number)}>
          <td>{index + 1}</td>
          <td>{item.title}</td>
          <td>{item.type}</td>
        </tr>)

      // <div className="selectBox2" key={item.id}>{`(${index + 1}) ` + item.name} <span>{item.server}</span></div>
    });

    return (
      <div className="margin_table">
        <container>
          <Table responsive hover>
            <thead >
              <br />
              <tr>
                <th width="50">#</th>
                <th>TITLE</th>
                <th>TYPE</th>
              </tr>
            </thead>

            <tbody style={{ textAlign: "center", verticalAlign: "middle", alignItems: "center", wordBreak: "break-all", fontSize: "0.9rem" }}>
              {divItems}
            </tbody>

          </Table>


        </container>
      </div>
    )
  }
}
