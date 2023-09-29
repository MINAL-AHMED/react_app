import "./App.css";
import tasks from "./components/Task";
import TaskCard from "./components/TaskCard";
const App = () => {
  return (
    <div className="cards-group">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default App;
