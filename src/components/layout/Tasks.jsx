import React from "react";

import { useTasks } from "../../hooks/index";
import { useSelectedProjectValue, useProjectsValue } from "../../context";
import AddTask from "../AddTask";
import Task from "../Task";

const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  const selectedTaskName = projects.filter(
    (pr) => pr.projectId === `${selectedProject}`
  );

  return (
    <div className="p-[20px] flex flex-col items-center">
      <h2 className="text-[20px] xl:w-[800px] max-xl:w-[100%] ">{selectedTaskName[0] ? selectedTaskName[0].name : selectedProject}</h2>
      <div className="xl:w-[800px] max-xl:w-[100%] mt-[10px]">{tasks && tasks?.map((task) => <Task task={task} key={task.id} />)}</div>
      <AddTask selectedTaskName={selectedTaskName} />
    </div>
  );
};

export default Tasks;
