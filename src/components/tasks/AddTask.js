import React, { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";

import { useSelectedProjectValue } from "../../context";
import AddTaskModal from "./AddTaskModal";

const AddTask = ({ selectedTaskName }) => {
  const [openModal, setOpenModal] = useState(false);
  const { selectedProject } = useSelectedProjectValue();

  return (
    <div className="xl:w-[800px] max-xl:w-[100%] pt-[5px]">
      {selectedProject !== "Completed" && (
        <div className="">
          {!openModal && (
            <button
              type="button"
              className="group flex items-center hover:text-[#46ABEF]"
              onClick={() => setOpenModal(!openModal)}
            >
              <AiOutlinePlus className="text-[20px]" />{" "}
              <span className="text-[#B2AEC2] pl-[10px] group-hover:text-[#46ABEF]">
                Add task
              </span>
            </button>
          )}
          {openModal && (
            <AddTaskModal
              selectedProject={selectedProject}
              selectedTaskName={selectedTaskName}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AddTask;
