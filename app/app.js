import React, { useState, useEffect } from "react";

function App() {
  // State to track the theme
  const [theme, setTheme] = useState("light");

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Save preference in local storage
    localStorage.setItem("theme", newTheme);
  };

  // Apply the theme when the app loads
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Update the theme whenever the state changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <header>
        <h1>React Dark and Light Mode</h1>
        <button onClick={toggleTheme} className="click-btn">
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
      <main>
        <p>
          This is a simple implementation of a dark and light mode toggle in
          React.
        </p>
      </main>
    </div>
  );
}

export default App;
