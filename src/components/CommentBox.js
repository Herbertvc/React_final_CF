import React from 'react';

import CommentForm from './CommentForm'
import CommentList from './CommentList'

export default class CommentBox extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class='comment-box'>
        <CommentForm onSubmit={this.props.onSubmit} />
        <CommentList data={this.props.data} />
      </div>
    );
  }
}