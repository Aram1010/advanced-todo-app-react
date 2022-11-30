import React from "react";

import { useSelectedProjectValue } from "../../context";

import { FaInbox, FaCheck } from "react-icons/fa";

const selectedStyle = {
  selectBg: "#F1F1F0",
  color: "#46ABEF",
};

const DefaultProjects = () => {
  const { selectedProject, setSelectedProject } = useSelectedProjectValue();
  return (
    <div className="">
      <div
        className="flex items-center p-[10px] cursor-pointer rounded-[6px] bg-[#ffff] hover:bg-[#F8F8F7] my-[4px]"
        onClick={() => setSelectedProject("Inbox")}
        style={
          selectedProject === "Inbox"
            ? {
                backgroundColor: selectedStyle.selectBg,
                color: selectedStyle.color,
              }
            : null
        }
      >
        <FaInbox
          style={
            selectedProject === "Inbox"
              ? {
                  backgroundColor: selectedStyle.selectBg,
                  color: selectedStyle.color,
                }
              : { color: "#B2AEC2" }
          }
        />
        <span className="ml-[10px]">Inbox</span>
      </div>
      <div
        className="flex items-center p-[10px] cursor-pointer rounded-[6px] bg-[#ffff] hover:bg-[#F8F8F7] my-[4px]"
        onClick={() => setSelectedProject("Completed")}
        style={
          selectedProject === "Completed"
            ? {
                backgroundColor: selectedStyle.selectBg,
                color: selectedStyle.color,
              }
            : null
        }
      >
        <FaCheck
          style={
            selectedProject === "Completed"
              ? {
                  backgroundColor: selectedStyle.selectBg,
                  color: selectedStyle.color,
                }
              : { color: "#B2AEC2" }
          }
        />
        <span className="ml-[10px]">Completed</span>
      </div>
    </div>
  );
};

export default DefaultProjects;
