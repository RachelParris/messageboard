import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../header/Header';


class AllThreads extends Component {
  constructor (props) {
    super(props);

    this.state = {
      threads: []
    }
  }

  componentDidMount () {
    axios.get('/threads')
      .then(res => {
        this.setState({
          threads: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render () {
    const threads = this.state.threads.map((thread, index) => {
      return (
        <div key={index}>
          <ul>
            <li>{thread.author}</li>
            <li>{thread.title}</li>
            <li>{thread.body}</li>
          </ul>
        </div>
      );
    });

    return (
      <div>
        <Header />
        {threads}
      </div>
    );
  }
}


export default AllThreads;