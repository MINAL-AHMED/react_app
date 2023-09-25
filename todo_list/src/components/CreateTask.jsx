import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CreateTask = ({ addNewTask }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          addNewTask(text);
          setText("");
        }}
      >
        Create Task
      </button>
    </div>
  );
};

export default CreateTask;
