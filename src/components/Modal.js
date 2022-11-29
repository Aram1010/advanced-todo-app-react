import React from "react";

import { db } from "../firebase/firebase";
import { deleteDoc, doc } from "firebase/firestore";

import { useSelectedProjectValue } from "../context";

import { FiEdit2 } from "react-icons/fi";
import { AiOutlineStar, AiOutlineDelete } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const Modal = ({ openModal, setOpenModal, project }) => {
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (docId) => {
    const docRef = doc(db, "projects", docId);
    deleteDoc(docRef).then(() => {
      setSelectedProject("INBOX");
    });
  };

  return (
    <div
      className="absolute z-50 top-[2rem] right-[-5rem] p-[15px] w-[200px] bg-[rgba(255,255,255,.2)] backdrop-blur-[5px] 
        rounded-[4px] shadow-[rgba(149,157,165,0.2)_0px_8px_24px] text-[#02002E]"
    >
      <button type="button" className="flex items-center mb-[10px]">
        <FiEdit2 /> <span className="pl-[5px]">Edit</span>
      </button>
      <button type="button" className="flex items-center mb-[10px]">
        <AiOutlineStar /> <span className="pl-[5px]">Favorite</span>
      </button>
      <button
        type="button"
        className="flex items-center"
        onClick={() => deleteProject(project.docId)}
      >
        <AiOutlineDelete /> <span className="pl-[5px]">Delete</span>
      </button>
      <button
        className="absolute top-[0.5rem] right-[0.5rem] text-[20px]"
        onClick={() => setOpenModal(!openModal)}
      >
        <IoClose />
      </button>
    </div>
  );
};

export default Modal;
