import React, { Component } from 'react';

import Profile from './Profile';
import Blog from './Blog';

import Client from './Client';

import './Main.css';


// Main Container, this will invoke stateless components
class Main extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    Client.fetchPosts((posts) => {
      this.setState(posts: posts)
    })

  }

  render() {
    // console.log(posts);
    return (
      <main className="Main">
        <Profile/>
        <Blog/>
      </main>
    )
  }
};

export default Main;
