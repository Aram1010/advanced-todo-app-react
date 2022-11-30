import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { HiDotsVertical } from "react-icons/hi";
import { db } from "../../firebase/firebase";

import Modal from "./Modal";

const Project = ({ project }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    if (isEdit) setOpenModal(false);
  }, [isEdit]);

  const changeProject = () => {
    const docRef = doc(db, "projects", project.docId);
    updateDoc(docRef, {
      name: projectName,
    });
    setIsEdit(!isEdit);
  };

  return (
    <div className="group relative flex p-[10px] items-center">
      <div className="flex-1">
        <div
          className="flex-[0.5] flex items-center"
          style={isEdit ? { flex: "1" } : null}
        >
          <span style={{ color: project.color, fontSize: "20px" }}>•</span>
          {!isEdit && <span className="pl-[5px]">{project.name}</span>}
          {isEdit && (
            <span
              className="pl-[5px] outline-none"
              style={isEdit ? { cursor: "text", color: "#000" } : null}
              contentEditable={isEdit}
              onInput={(e) => setProjectName(e.currentTarget.textContent)}
              onKeyDown={(e) => {
                if (e.key === "Enter") changeProject();
              }}
              onKeyPress={(e) => {
                let max = 10;
                if (e.currentTarget.textContent.length >= max) {
                  e.preventDefault();
                }
              }}
              suppressContentEditableWarning={true}
            >
              {project.name}
            </span>
          )}
        </div>
        {isEdit && (
          <div className="p-[5px] flex justify-end">
            <button
              type="button"
              className="p-[5px] rounded-[4px] bg-[#F5F5F5] text-[14px] text-[#000] mr-[10px] hover:bg-[#c4c4c4]"
              onClick={() => setIsEdit(!isEdit)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="p-[5px] rounded-[4px] bg-[#46ABEF] text-[14px] text-[#ffff] hover:bg-[#1490e4]"
              onClick={() => changeProject()}
            >
              Save
            </button>
          </div>
        )}
      </div>
      {!isEdit && (
        <div className="flex-[0.5] text-right text-[#02002E]">
          <button
            type="button"
            className="invisible group-hover:visible"
            onClick={() => setOpenModal(!openModal)}
          >
            <HiDotsVertical />
          </button>
        </div>
      )}
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          project={project}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
        />
      )}
    </div>
  );
};

export default Project;
