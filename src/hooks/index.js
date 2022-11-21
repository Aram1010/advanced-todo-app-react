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
          const unsubscribe = onSnapshot(q, (querySnapshot) => {
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