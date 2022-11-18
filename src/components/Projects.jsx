import React, { useState } from "react";
import { useSelectedProjectValue, useProjectsValue } from "../context";
import Project from "./Project";

const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { selectedProject, setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects?.map((project) => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
        
        style={active === project.projectId ? {backgroundColor : "#000"} : {backgroundColor : "#ffff"}}
      >
        <Project project={project} />
      </li>
    ))
  );
};

export default Projects;
