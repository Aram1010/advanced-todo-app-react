import React, { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

import { v4 as uuid } from "uuid";

import {AiOutlinePlus } from "react-icons/ai";

const colors = [
  "aqua",
  "black",
  "blue",
  "fuchsia",
  "gray",
  "green",
  "lime",
  "maroon",
  "navy",
  "olive",
  "orange",
  "purple",
  "red",
  "silver",
  "teal",
  "yellow",
];

const AddProjects = () => {
  const [projectName, setProjectName] = useState("");

  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const addProject = (e) => {
    e.preventDefault();
    if (projectName) {
      const docRef = collection(db, "projects");
      addDoc(docRef, {
        name: projectName,
        projectId: small_id,
        color: randomColor(),
      }).then(() => {
        setProjectName("");
      });
    }
  };

  const limitProjectName = (e) => {
    const max_chars = 10;

    if (e.value.length > max_chars) {
      e.value = e.value.slice(0, 10);
    }
  };

  const randomColor = () => {
    let color = Math.floor(Math.random() * colors.length);
    return colors[color];
  };

  return (
    <div className="my-[20px] p-[10px]" onSubmit={addProject}>
      <form action="" className="flex items-center">
        <button type="submit" onClick={(e) => addProject(e)}>
          <AiOutlinePlus className="text-[20px]" />
        </button>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          onKeyDown={(e) => limitProjectName(e.target)}
          onKeyUp={(e) => limitProjectName(e.target)}
          placeholder="Create new project"
          className="outline-none ml-[10px]"
        />
      </form>
    </div>
  );
};

export default AddProjects;
