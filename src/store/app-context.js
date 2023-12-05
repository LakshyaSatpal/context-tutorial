import { createContext } from "react";

const AppContext = createContext({
  isLoggedIn: false,
  login: () => {},
});

export default AppContext;
