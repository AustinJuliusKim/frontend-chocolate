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
      this.setState({posts: posts})
    })

  }

  render() {
    let posts = this.state.posts;
    return (
      <main className="Main">
        <Profile/>
        <Blog posts={posts}/>
      </main>
    )
  }
};

export default Main;
