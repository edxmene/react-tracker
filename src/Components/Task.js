import { FaTimes } from "react-icons/fa";

const icoStyles = {
  color: "red",
  cursor: "pointer",
};

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>
        {task.text} <FaTimes style={icoStyles} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
