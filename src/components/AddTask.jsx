import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

import { v4 as uuid } from "uuid";

import { useSelectedProjectValue } from "../context";
import { db } from "../firebase/firebase";

const AddTask = () => {
  const [taskName, setTaskName] = useState("");
  const { selectedProject } = useSelectedProjectValue();

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
      }).then(() => {
        setTaskName("");
      });
    }
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
        />
        <button type="button" onClick={() => addTask()}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
