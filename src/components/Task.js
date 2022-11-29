import React, { useEffect, useState } from "react";

import Checkbox from "./Checkbox";
import TaskModal from "./TaskModal";

import { BsThreeDots } from "react-icons/bs";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Task = ({ task }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    if (isEdit) setOpenModal(false);
  }, [isEdit]);

  const changeTask = () => {
    const docRef = doc(db, "tasks", task.id);
    updateDoc(docRef, {
      task: taskName,
    })
    setIsEdit(!isEdit)
  }

  return (
    <li
      data-id-key={task.id}
      key={task.id}
      className="group flex items-center justify-between my-[10px] p-[10px] rounded-[10px] border-b-2 border-[#F0F0F0] relative"
      style={
        isEdit ? { margin: "40px 0px", border: "none", display: "block" } : null
      }
    >
      <div className="flex items-center">
        {!isEdit && (
          <Checkbox
            taskId={task.id}
            taskName={task.task}
            taskIsCompleted={task.isCompleted}
          />
        )}
        <div className="flex flex-col flex-1">
          <span
            style={Object.assign(
              {
                ...(task.isCompleted
                  ? { textDecoration: "line-through", color: "#AEAEAE" }
                  : null),
              },
              {
                ...(isEdit
                  ? {
                      padding: "20px",
                      border: "1px solid #F0F0F0",
                      width: "100%",
                      borderRadius: "8px",
                      outline: "none",
                    }
                  : null),
              }
            )}
            id="text"
            className="px-[5px] pl-[8px] break-word"
            contentEditable={isEdit}
            onInput={(e) => setTaskName(e.currentTarget.textContent)}
            onKeyDown={(e) => {
              if (e.key === "Enter") changeTask();
            }}
            suppressContentEditableWarning={true}
          >
            {task.task}
          </span>
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
                onClick={() => changeTask()}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
      {!isEdit && (
        <div className="">
          <button
            type="button"
            className="invisible group-hover:visible p-[5px]"
            onClick={() => setOpenModal(!openModal)}
          >
            <BsThreeDots />
          </button>
          {openModal && (
            <TaskModal
              task={task}
              openModal={openModal}
              setOpenModal={setOpenModal}
              setIsEdit={setIsEdit}
              isEdit={isEdit}
            />
          )}
        </div>
      )}
    </li>
  );
};

export default Task;
