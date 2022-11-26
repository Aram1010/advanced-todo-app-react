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
      className="flex items-center my-[10px] bg-[#fff] p-[10px] rounded-[10px]"
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
        className="px-[5px] pl-[8px] break-all"
      >
        {task.task}
      </span>
      <button className="min-w-fit" onClick={() => deleteTask(task.id)}>
        delete task
      </button>
    </li>
  );
};

export default Task;
