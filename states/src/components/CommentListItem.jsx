const CommentListItem = ({ comment }) => {
  return (
    <div className="comment-item" key={comment.id}>
      <h4>{comment.user.name}</h4>
      <p>{comment.text}</p>
    </div>
  );
};

export default CommentListItem;
