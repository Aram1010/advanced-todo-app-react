import React, { useState } from "react";
import { useSelectedProjectValue, useProjectsValue } from "../context";
import Project from "./Project";

const Projects = () => {
  const { selectedProject, setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects?.map((project) => (
      <li
        key={project.projectId}
        data-id={project.projectId}
        onClick={() => {
          setSelectedProject(project.projectId);
        }}
        style={
          selectedProject === project.projectId
            ? { backgroundColor: "#F1F1F0", color: "#46ABEF" }
            : null
        }
        className="list-none rounded-[6px] cursor-pointer my-[4px] bg-[#ffff] hover:bg-[#F8F8F7]"
      >
        <Project project={project} />
      </li>
    ))
  );
};

export default Projects;
