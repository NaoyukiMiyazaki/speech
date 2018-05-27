import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Navigation from "./components/Navigation/Navigation";
import Home from './components/Home/Home'
import About from './components/About/About'
import Post from './components/Post/Post'

import Posts from './Posts.json'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <div style={{
            padding: '0 1em'
          }}>
            <Switch>
              <Route exact path="/" render={(props) => (
                <Home {...props} posts={Posts} />
              )}/>
              <Route path="/about" component={About} />
              <Route path='/post/:slug' render={(props) => {
                const post = Posts.filter(post => {
                  return post.slug === props.match.params.slug
                })[0]
                return <Post {...props} post={post} />
              }}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
