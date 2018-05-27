import React, { Component } from "react";

import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';

export default class SpeechControls extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      speaking: window.speechSynthesis.speaking,
    }

    this.utter = new SpeechSynthesisUtterance()
    this.isManualEnd = false

    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }

  setVoice(utter, lang = 'ja-JP') {
    utter.voice = window.speechSynthesis.getVoices().filter((voice) => {
      return voice.lang === lang
    })[0]
  }

  _handleEnd() {
    const { index } = this.state

    if (this.isManualEnd) return

    this.setState({
      index: index + 1
    }, () => {
      this.play()
    })
  }

  play() {
    const { speechList, lang } = this.props
    const { index, speaking } = this.state

    if (speaking) return

    this.utter.text = speechList[index]
    this.setVoice(this.utter, lang)
    window.speechSynthesis.speak(this.utter)
    this.isManualEnd = false

    this.setState({
      speaking: window.speechSynthesis.speaking,
    })
  }

  pause() {
    this.isManualEnd = true
    window.speechSynthesis.cancel()

    this.setState({
      index: 0,
      speaking: window.speechSynthesis.speaking,
    })
  }

  prev() {
    const { index, speaking } = this.state
    this.isManualEnd = true
    window.speechSynthesis.cancel();

    this.setState({
      index: index > 0 ? index - 1 : 0,
      speaking: window.speechSynthesis.speaking,
    }, () => {
      if (speaking) {
        this.play()
      }
    })
  }

  next() {
    const { speechList } = this.props
    const { index, speaking } = this.state
    this.isManualEnd = true
    window.speechSynthesis.cancel();

    this.setState({
      index: index < speechList.length ? index + 1 : 0,
      speaking: window.speechSynthesis.speaking,
    }, () => {
      if (speaking) {
        this.play()
      }
    })
  }

  render() {
    return (
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        background: '#fff',
        boxShadow: '0px -1px 10px 0px rgba(0,0,0,.1)',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <IconButton aria-label="Previous">
          <SkipPreviousIcon onClick={this.prev} />
        </IconButton>
        <IconButton aria-label="Play/pause">
          {this.state.speaking ? <PauseIcon onClick={this.pause} /> : <PlayArrowIcon onClick={this.play} />}
        </IconButton>
        <IconButton aria-label="Next">
          <SkipNextIcon onClick={this.next} />
        </IconButton>
      </div>
    )
  }
}
