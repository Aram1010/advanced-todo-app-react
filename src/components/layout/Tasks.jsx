import React from "react";

import { useTasks } from "../../hooks/index";
import { useSelectedProjectValue } from "../../context";
import AddTask from "../AddTask";

const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { tasks } = useTasks(selectedProject);

  return (
    <div>
      <h2>Tasks</h2>
      {tasks &&
        tasks?.map((task) => (
          <li data-Id-key={task.docId} key={task.docId}>
            {task.task}
          </li>
        ))}
        <AddTask />
    </div>
  );
};

export default Tasks;
