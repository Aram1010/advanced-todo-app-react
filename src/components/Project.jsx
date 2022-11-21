import React, { useState } from "react";

import { useProjectsValue, useSelectedProjectValue } from "../context";

import { db } from "../firebase/firebase";
import { deleteDoc, doc } from "firebase/firestore";

import { FaTrashAlt } from "react-icons/fa";

const Project = ({ project }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (docId) => {
    const docRef = doc(db, "projects", docId);
    deleteDoc(docRef).then(() => {
      setSelectedProject("INBOX");
    });
  };

  return (
    <div className="relative">
      <span className="">•</span>
      <span className="">{project.name}</span>
      <button
        type="button"
        onClick={() => setConfirmDelete(!confirmDelete)}
        className="ml-[10px]"
      >
        <FaTrashAlt />
      </button>
      {confirmDelete && (
        <div className="absolute bg-[#ffff] z-10 top-[1rem] p-[10px] w-[200px] shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
          <button type="button" onClick={() => deleteProject(project.docId)}>
            Delete
          </button>
          <span
            onClick={() => setConfirmDelete(!confirmDelete)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setConfirmDelete(!confirmDelete);
            }}
            className="ml-[10px]"
          >
            Cancel
          </span>
        </div>
      )}
    </div>
  );
};

export default Project;
