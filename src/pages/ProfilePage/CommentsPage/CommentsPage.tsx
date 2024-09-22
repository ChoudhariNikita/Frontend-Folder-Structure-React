import React from "react";
import { COMMENTS } from '../../../constants'; 

const CommentsPage: React.FC = () => {
  return (
    <div className="comments-page">
      <h3>Comments</h3>
      <div className="comments-list">
        {COMMENTS.map(comment => (
          <div key={comment.id} className="comment">
            <strong>{comment.author}</strong>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsPage;
