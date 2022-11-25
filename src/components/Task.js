import React from "react";
import Checkbox from "./Checkbox";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Task = ({ task }) => {
  const deleteTask = (taskId) => {
    const docRef = doc(db, "tasks", taskId);
    deleteDoc(docRef);
  };
  return (
    <li
      data-id-key={task.id}
      key={task.id}
      className="flex items-center my-[10px]"
    >
      <Checkbox
        taskId={task.id}
        taskName={task.task}
        taskIsCompleted={task.isCompleted}
      />
      <span
        style={
          task.isCompleted
            ? { textDecoration: "line-through", color: "#AEAEAE" }
            : null
        }
        className="ml-[10px]"
      >
        {task.task}
      </span>
      <button className="ml-[20px]" onClick={() => deleteTask(task.id)}>
        delete task
      </button>
    </li>
  );
};

export default Task;
