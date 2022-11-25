import React from "react";

import { useTasks } from "../../hooks/index";
import { useSelectedProjectValue } from "../../context";
import AddTask from "../AddTask";
import Task from "../Task";

const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { tasks } = useTasks(selectedProject);

  return (
    <div className="p-[10px]">
      <h2>Tasks</h2>
      {tasks && tasks?.map((task) => <Task task={task} key={task.id} />)}
      <AddTask />
    </div>
  );
};

export default Tasks;
