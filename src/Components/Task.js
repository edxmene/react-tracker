import { FaTimes } from "react-icons/fa";

const icoStyles = {
  color: "red",
  cursor: "pointer",
};

const Task = ({ task, deleteTask, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes style={icoStyles} onClick={() => deleteTask(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
