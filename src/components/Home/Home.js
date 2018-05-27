import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        {this.props.posts.map((post) => (
          <Card key={post.id} style={{
            marginBottom: 20
          }}>
            <CardContent>
              <Typography variant="headline" component="h2">
                {post.title}
              </Typography>
              <Typography color="textSecondary">
                {post.author}
              </Typography>
              <Typography color="textSecondary">
                read {post.read_time}
              </Typography>
              <Typography component="p">
                {post.excerpt}...
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/post/${post.slug}`} style={{
                marginLeft: 'auto'
              }}><Button size="small">More</Button></Link>
            </CardActions>
          </Card>
        ))}
      </div>
    )
  }
}
