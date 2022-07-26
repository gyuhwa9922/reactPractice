import React from 'react';
import Dtime from './Dtime';
import Avatar from './Avatar';

function Comment(props) {
  return (
    <>
      <div class="comment">
        <div class="user_info container">
          <Avatar url={props.avatarUrl} />
          <div class="user_info_name container">
            {props.name}
          </div>
        </div>
        <div class="comment-txt container">
          <p>{props.comment}</p>
          <div class="comment-date">
            <Dtime />
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;