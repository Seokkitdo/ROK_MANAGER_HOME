import React, { Component } from 'react'
import { container, Card } from 'react-bootstrap';
import './Update_content.css';
import ModalExample from './ModalExample.jsx';
import Markdown from 'react-markdown/with-html';
import axios from '../api'

export default class Update_content extends Component {
    state = {title:"",article:""}
    boardnum = this.props.match.params.boardnum-1;
    componentDidMount(){
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
            this.setState({ title: response.data.info[this.boardnum].title, article:response.data.info[this.boardnum].article })
          }
    
        } catch (error) {
    
        }
      }
  

    render() {
        const input = '# This is a header\n\nAnd this is a paragraph'
        const source = ' <h2 style="color:black"> aa</h2> \n\n # aaaa <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>  <img src="https://ifh.cc/g/FjZYQI.jpg" width="200"/> \n dasdsad **Bold** __Bold__ *Italic* _Italic_ ~~Cancel~~ \n\n <h1> dddd </h1>'
       
        // const React = require('react')
        // const ReactDOM = require('react-dom')
        // const ReactMarkdown = require('react-markdown')
        // ReactDOM.render(<ReactMarkdown source={input} />, document.getElementById('container'))
        return (
            <div>
                <container>
                    <Card className="card_center" style={{ width: '90%', maxWidth: '1000px', height: '40rem' }}>
                        <Card.Body>
                            <Card.Title>{this.state.title}</Card.Title>
                            <Card.Text>
                                <Markdown source = {this.state.article} escapeHtml={false} skipHtml={false}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br/>
                    <br/>
                    <br/>
                    
                </container>
            </div>
        )
    }
}
