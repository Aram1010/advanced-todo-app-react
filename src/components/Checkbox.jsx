import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/firebase";
import { FaRegCheckCircle } from "react-icons/fa";

const Checkbox = ({ taskId, taskIsCompleted }) => {
  const completeTask = () => {
    console.log(taskIsCompleted);
    const docRef = doc(db, "tasks", taskId);
    updateDoc(docRef, {
      isCompleted: taskIsCompleted ? false : true,
    });
  };

  return (
    <div
      onClick={() => completeTask()}
      style={taskIsCompleted ? { backgroundColor: "#E2E2E2" } : null}
      className="rounded-[50px] w-[15px] cursor-pointer h-[15px] 
      shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px]"
    >
        {taskIsCompleted && <FaRegCheckCircle style={{ color: "#ffff"}}/>}
    </div>
  );
};

export default Checkbox;
