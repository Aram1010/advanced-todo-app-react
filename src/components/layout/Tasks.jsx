import React from "react";

import { useTasks } from "../../hooks/index";
import { useSelectedProjectValue } from "../../context";
import AddTask from "../AddTask";
import Checkbox from "../Checkbox";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { tasks } = useTasks(selectedProject);

  const deleteTask = (taskId) => {
    const docRef = doc(db, "tasks", taskId);
    deleteDoc(docRef);
  };

  return (
    <div className="flex-[0.7] bg-[#FBFBFA]">
      <h2>Tasks</h2>
      {tasks &&
        tasks?.map((task) => (
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
        ))}
      <AddTask />
    </div>
  );
};

export default Tasks;
