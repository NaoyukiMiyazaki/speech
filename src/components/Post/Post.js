import React, { Component } from "react";

import SpeechControls from "./SpeechControls"

import html2text from './html2text'

export default class Post extends Component {
  render() {
    return (
      <article style={{
        paddingBottom: 80
      }}>
        <h1 id="title">{this.props.post.title}</h1>
        <p id="author">{this.props.post.author}</p>
        <div dangerouslySetInnerHTML={{__html: this.props.post.html}} />
        <SpeechControls speechList={html2text(this.props.post.html).split('。')} />
      </article>
    )
  }
}
