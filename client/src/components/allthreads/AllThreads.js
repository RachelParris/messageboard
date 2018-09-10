import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Header from '../header/Header';
import './AllThreads.css';

const Threads = [
  {
    author: {
      id: '0001',
      username: 'Heromine',
      icon: 'http://placekitten.com/100/100'
    },
    title: 'It takes a great deal of bravery to stand up to our enemies...',
    body: 'It takes a great deal of bravery to stand up to our enemies but just as much to stand up to our friends It takes a great deal of bravery to stand up to our enemies but just as much to stand up to our friends I am what I am an Im not ashamed Never be ashamed my ol dad used ter say theres some wholl hold it against you but theyre not worth botherin with.',
    createdAt: '2 hours ago',
    updated: false,
    comments: [{}, {}, {}]
  },
  {
    author: {
      id: '0002',
      username: 'Ron',
      icon: 'http://placekitten.com/100/100'
    },
    title: 'Yer a wizard Harry.',
    body: 'It takes a great deal of bravery to stand up to our enemies but just as much to stand up to our friends. Not my daughter you bitch Yer a wizard Harry, 10 points to Gryffindor Words are in my not so humble opinion our most inexhaustible source of magic capable of both influencing injury and remedying it Its wingardium leviOsa not leviosAH Really Hagrid if you are holding out for universal popularity Im afraid you will be in this cabin for a very long time Hermione Granger Im not going to be murdered Harry said out loud  Thats the spirit dear said his mirror sleepily It matters not what someone is born but what they grow to be. I think Ill just go and have some pudding Never trust anything that can think for itself if you cant see where it keeps its brain I think Ill just go and have some pudding Theres no need to call me Sir Professor I am what I am an Im not ashamed Never be ashamed my ol dad used ter say theres some wholl hold it against you but theyre not worth botherin with How very irritating Im not going to be murdered Harry said out loud  Thats the spirit dear said his mirror sleepily There are some things you cant share without ending up liking each other and knocking out a twelvefoot mountain troll is one of them, It is our choices Harry that show what we truly are far more than our abilities Not my daughter you bitch Harry Potter',
    createdAt: Date.now(),
    updated: false,
    comments: []
  },
  {
    author: {
      id: '0003',
      username: 'Harry',
      icon: 'http://placekitten.com/100/100'
    },
    title: 'Its wingardium leviOsa not leviosAH',
    body: 'Of course it is happening inside your head Harry but why on earth should that mean it is not real Just because you have the emotional range of a teaspoon doesnt mean we all have Hermione Granger Severus Snape, There are some things you cant share without ending up liking each other and knocking out a twelvefoot mountain troll is one of them There are all kinds of courage Never trust anything that can think for itself if you cant see where it keeps its brain The things we lose always have a way of coming back to us in the end There are some things you cant share without ending up liking each other and knocking out a twelvefoot mountain troll is one of them',
    createdAt: Date.now(),
    updated: true,
    comments: [{}, {}]
  },
]
const commentAlt = <FontAwesomeIcon icon={faCommentAlt} />
const share = <FontAwesomeIcon icon={faShare} />
const bookmark = <FontAwesomeIcon icon={faBookmark} />

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
    const x = this.state.threads.map((thread, index) => {
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

    const threads = Threads.map((thread, index) => {
      return (
        <section key={index} class="box">
          <div class="box-header">
            <img class="icon" src={thread.author.icon} alt={thread.author.username + '\'s icon'}/>
            <p>r/collection - Posted by {thread.author.username}</p>
            <p>{thread.createdAt}</p>
          </div>
          <div>
            <h3>{thread.title}</h3>
            <p>{thread.body}</p>
          </div>
          <div>
            <ul>
              <li>{commentAlt} {thread.comments.length} Comments</li>
              <li>{share} Share</li>
              <li>{bookmark} Save</li>
            </ul>
          </div>
        </section>
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