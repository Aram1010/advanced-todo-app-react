import React, { useState, useEffect, createContext, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { auth } from "../firebase/firebase";

const AppContext = createContext();
export const AppLayerContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user._delegate);
      if (user) navigate("/tasks");
    });
  }, [user]);

  const value = { user };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
