import React from "react";

import { useTasks } from "../../hooks/index";
import { useSelectedProjectValue } from "../../context";
import AddTask from "../AddTask";
import Checkbox from "../Checkbox";

const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { tasks } = useTasks(selectedProject);

  return (
    <div>
      <h2>Tasks</h2>
      {tasks &&
        tasks?.map((task) => (
          <li
            data-id-key={task.id}
            key={task.id}
            className="flex items-center my-[10px]"
            style={
              task.isCompleted
                ? { textDecoration: "line-through", color: "#AEAEAE" }
                : null
            }
          >
            <Checkbox
              taskId={task.id}
              taskName={task.task}
              taskIsCompleted={task.isCompleted}
            />
            <span className="ml-[10px]">{task.task}</span>
          </li>
        ))}
      <AddTask />
    </div>
  );
};

export default Tasks;
