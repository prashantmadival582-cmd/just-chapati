import { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("just-chapati-theme");

    return savedTheme === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("just-chapati-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("just-chapati-theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((previousMode) => !previousMode);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        darkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={
        darkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      <span className="theme-toggle-icon">
        {darkMode ? "☀" : "☾"}
      </span>
    </button>
  );
}

export default ThemeToggle;