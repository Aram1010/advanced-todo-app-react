import React, { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

import { v4 as uuid } from "uuid";

const AddTaskModal = ({
  selectedProject,
  selectedTaskName,
  openModal,
  setOpenModal,
}) => {
  const [taskName, setTaskName] = useState("");
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const addTask = () => {
    if (taskName) {
      const docRef = collection(db, "tasks");
      addDoc(docRef, {
        task: taskName,
        projectId: selectedProject,
        docId: small_id,
        date: "",
        isCompleted: false,
      }).then(() => {
        document.getElementById("editable").textContent = "";
        setTaskName("");
      });
    }
  };
  //
  return (
    <div>
      <div
        id="editable"
        data-placeholder={`Add task to "${
          selectedTaskName[0] ? selectedTaskName[0].name : selectedProject
        }"`}
        contentEditable="true"
        spellCheck="true"
        className="outline-none break-all cursor-text border-2 border-solid border-[#e5e5e5] rounded-[10px] p-[10px]"
        onInput={(e) => setTaskName(e.currentTarget.textContent)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask();
        }}
      ></div>
      <div className="flex justify-end mt-[10px]">
        <button
          type="button"
          className="p-[5px] rounded-[4px] bg-[#F5F5F5] text-[14px] text-[#000] mr-[10px] hover:bg-[#c4c4c4]"
          onClick={() => setOpenModal(!openModal)}
        >
          Cancel
        </button>
        <button
          type="button"
          className="p-[5px] rounded-[4px] bg-[#46ABEF] text-[14px] text-[#ffff] hover:bg-[#1490e4]"
          onClick={() => addTask()}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTaskModal;
