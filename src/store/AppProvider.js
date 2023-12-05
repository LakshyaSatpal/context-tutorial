import React, { useState } from "react";
import AppContext from "./app-context";

const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const appContextValue = {
    isLoggedIn: isLoggedIn,
    login: handleLogin,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
