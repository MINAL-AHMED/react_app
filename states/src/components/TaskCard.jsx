/* eslint-disable react/prop-types */
import CommentListItem from "./CommentListItem";
import TagListItem from "./TagListItem";
import TaskListItem from "./TaskListItem";

function getDay(dateStr) {
  const date = new Date(dateStr).getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[date];
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}
const TaskCard = ({ task }) => {
  return (
    <div className="day-card">
      <h1 className="title">
        {getDay(task.createdAt)}, {formatDate(task.createdAt)}
      </h1>
      <h3 className="sub-title">{task.subtitle}</h3>
      <ul className="tag-ul">
        {task.tags.map((tag) => (
          <TagListItem key={tag.id} tag={tag} />
        ))}
      </ul>
      <div className="line" />
      <p className="notes">Notes Linked to People</p>
      <div className="comments">
        {task.comments.map((comment) => (
          <CommentListItem key={comment.id} comment={comment} />
        ))}
      </div>
      <ul className="tasks">
        {task.tasks.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskCard;
