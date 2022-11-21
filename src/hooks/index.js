import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isRender = false;

    const handle = async () => {
      await setTimeout(1000);

      if (!isRender) {
        const getPr = () => {
          const q = query(collection(db, "projects"), orderBy("projectId"));
          onSnapshot(q, (querySnapshot) => {
            const projects_ = [];
            querySnapshot.forEach((doc) => {
              projects_.push({
                name: doc.data().name,
                projectId: doc.data().projectId,
                docId: doc.id,
              });

              setProjects(projects_);
            });
          });
        };
        getPr();
      }
    };

    handle();

    return () => {
      isRender = true;
    };
  }, []);

  return { projects, setProjects };
};

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);

  let collection_ = collection(db, "tasks");
  const q = query(collection_ , orderBy("date"));
  useEffect(() => {
    let isRender = false;

    const handle = async () => {
      await setTimeout(1000);

      if (!isRender) {
        if (selectedProject === "Inbox") {
          setTasks("");
          onSnapshot(q, (querySnapshot) => {
            const tasks_ = [];
            querySnapshot.forEach((doc) => {
              tasks_.push({
                task: doc.data().task,
                projectId: doc.data().projectId,
                date: "",
              });
              setTasks(tasks_);
            });
          });
        } else {
          setTasks("");
          onSnapshot(q, (querySnapshot) => {
            const tasks_ = [];
            const selectedtasks = [];
            querySnapshot.forEach((doc) => {
              tasks_.push({
                task: doc.data().task,
                projectId: doc.data().projectId,
                docId: doc.data().docId,
                date: "",
              });
              const specificTasks = tasks_.filter(
                tas => tas.projectId === `${selectedProject}`
              );
                setTasks(specificTasks);
              }
            );
          });
        }
      }
    };
    handle();

    return () => {
      isRender = true;
    };
  }, [selectedProject]);
  return { tasks };
};
