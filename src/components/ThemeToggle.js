import React from "react";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      Change to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
