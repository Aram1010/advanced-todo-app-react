import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, orderBy } from "firebase/firestore";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isRender = false;

    const handle = async () => {
      await setTimeout(1000);

      if (!isRender) {
        const getPr = () => {
          getDocs(collection(db, "projects"), orderBy("projectId")).then(
            (snapshot) => {
              const allProjects = snapshot.docs.map((project) => ({
                ...project.data(),
                docId: project.id,
              }));

              if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                setProjects(allProjects);
              }
            }
          );
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
