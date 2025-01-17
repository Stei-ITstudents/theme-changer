import logo from "./logo.svg";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme === "light" ? "light-mode" : "dark-mode"}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{theme === "light" ? "🌞 Day" : "🌙 Night"}</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
