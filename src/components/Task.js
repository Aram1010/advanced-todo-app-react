import React, { useState } from "react";

import Checkbox from "./Checkbox";
import TaskModal from "./TaskModal";

import { BsThreeDots } from "react-icons/bs";

const Task = ({ task }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <li
      data-id-key={task.id}
      key={task.id}
      className="group flex items-center justify-between my-[10px] p-[10px] rounded-[10px] border-b-2 border-[#F0F0F0] relative"
    >
      <div className="flex items-center">
        <Checkbox
          taskId={task.id}
          taskName={task.task}
          taskIsCompleted={task.isCompleted}
        />
        <span
          style={
            task.isCompleted
              ? { textDecoration: "line-through", color: "#AEAEAE" }
              : null
          }
          className="px-[5px] pl-[8px] break-all"
        >
          {task.task}
        </span>
      </div>
      <div className="">
        <button
          type="button"
          className="invisible group-hover:visible"
          onClick={() => setOpenModal(!openModal)}
        >
          <BsThreeDots />
        </button>
        {openModal && (
          <TaskModal
            task={task}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
      </div>
    </li>
  );
};

export default Task;
