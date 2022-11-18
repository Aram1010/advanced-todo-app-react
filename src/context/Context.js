import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) navigate("/tasks");
    });
  }, [user, navigate]);

  const value = { user };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppLayerContext = () => useContext(AppContext);
