import React, { Component } from "react";
import { Link } from "react-router-dom";

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

class Navigation extends Component {
  state = {
    open: false,
  };

  handleVisibility = (open) => {
    this.setState({ open });
  };

  render() {
    return (
      <div>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => {this.setState({ open: true})}}
        >
            <MenuIcon />
        </IconButton>
        <Drawer
          open={this.state.open}
          onClose={() => {this.setState({ open: false})}}
        >
        <div
            tabIndex={0}
            role="button"
            onClick={() => {this.setState({ open: false})}}
            onKeyDown={() => {this.setState({ open: false})}}
          >
            <List style={{
              padding: '.5em 1em'
            }}><Link to="/">Home</Link></List>
            <Divider />
            <List style={{
              padding: '.5em 1em'
            }}><Link to="/about">About</Link></List>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default Navigation;
