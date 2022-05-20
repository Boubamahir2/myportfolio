import React, { useEffect } from "react";
import {  BsSun } from "react-icons/bs";
import { GiMoon} from "react-icons/gi";

// local Storage
const getLocalStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Darkmode = () => {
  const [theme, setTheme] = React.useState(getLocalStorageTheme);
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <div className="nav-center">
      <button className="btn dar" onClick={toggleTheme}>
        {theme === "light-theme" ? <GiMoon /> : <BsSun />}
      </button>
    </div>
  );
};

export default Darkmode;
