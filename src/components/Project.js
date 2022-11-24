import React, { useEffect, useState } from "react";

import { HiDotsVertical } from "react-icons/hi";

import Modal from "./Modal";

const Project = ({ project }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="group relative flex p-[10px] items-center">
      <div className="flex-[0.5] flex items-center">
        <span style={{color: project.color , fontSize: "20px"}}>•</span>
        <span className="pl-[5px]">{project.name}</span>
      </div>
      <div className="flex-[0.5] text-right text-[#02002E]">
        <button
          type="button"
          className="invisible group-hover:visible"
          onClick={() => setOpenModal(!openModal)}
        >
          <HiDotsVertical />
        </button>
      </div>
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          project={project}
        />
      )}
    </div>
  );
};

export default Project;
