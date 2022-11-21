import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { v4 as uuid } from "uuid";

const AddProjects = () => {
  const [projectName, setProjectName] = useState("");

  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const addProject = () => {
    if (projectName) {
      const docRef = collection(db, "projects");
      addDoc(docRef, {
        name: projectName,
        projectId: small_id,
      }).then(() => {
        setProjectName("");
      });
    }
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Project name"
        />
        <button type="button" onClick={() => addProject()}>
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjects;
