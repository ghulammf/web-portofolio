import { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  return (
    <AppContext.Provider
      value={{ isMenuOpen, setIsMenuOpen, activeSection, setActiveSection }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
