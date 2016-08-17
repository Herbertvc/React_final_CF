import React from 'react';

import Comment from './Comment';

export default class CommentList extends React.Component {
  constructor() {
    super();
  }

  render() {
    let all_comments = Object.keys(this.props.data).map(key => this.props.data[key])
    all_comments = all_comments.map((comment) => {
      return (<Comment  key={comment.id} author={comment.author} text={comment.text} />)
    });

    return (
      <div class="commentList">
      	{all_comments}
      </div>
    );
  }
}
