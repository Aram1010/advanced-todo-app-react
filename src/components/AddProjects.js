import React, { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

import { v4 as uuid } from "uuid";

import { CgAddR } from "react-icons/cg";

const AddProjects = () => {
  const [projectName, setProjectName] = useState("");

  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const addProject = (e) => {
    e.preventDefault()
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
    <div className="my-[20px]" onSubmit={addProject}>
      <form action="" className="flex items-center">
        <button type="submit" onClick={() => addProject()}>
          <CgAddR className="text-[20px]" />
        </button>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Create new project"
          className="outline-none ml-[10px]"
        />
      </form>
    </div>
  );
};

export default AddProjects;
