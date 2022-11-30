import React, { useEffect, useRef } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import { FiEdit2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

const TaskModal = ({ task, openModal, setOpenModal, setIsEdit, isEdit }) => {
  const deleteTask = (taskId) => {
    const docRef = doc(db, "tasks", taskId);
    deleteDoc(docRef);
  };
  return (
    <div
      className="absolute z-50 top-[2rem] right-[0rem] p-[15px] w-[200px] bg-[#ffff] 
    rounded-[4px] border-2 border-[#eee] shadow-[0_1px_8px_0_rgb(0_0_0_/_8%)] text-[#02002E]"
    >
      <button
        type="button"
        className="flex items-center mb-[10px]"
        onClick={() => setIsEdit(!isEdit)}
      >
        <FiEdit2 /> <span className="pl-[5px]">Edit task</span>
      </button>
      <button
        className="min-w-fit flex items-center"
        onClick={() => deleteTask(task.id)}
      >
        <AiOutlineDelete /> <span className="pl-[5px]">Delete task</span>
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

export default TaskModal;
