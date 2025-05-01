import React from "react";
import { useState, useEffect } from "react";

const DarkMode = () => {
  // Initialize state based on the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set initial state on component mount
  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    setIsDarkMode(currentTheme === "dark");
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    // Update the DOM
    document.documentElement.setAttribute(
      "data-theme",
      newDarkMode ? "dark" : "light",
    );

    if (newDarkMode) {
      document.body.classList.add("gray-gradient");
    } else {
      document.body.classList.remove("gray-gradient");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-y-2 items-center">
        <div
          onClick={toggleDarkMode}
          className={`w-14 h-8 flex items-center rounded-full  cursor-pointer transition-colors duration-300 relative ${
            isDarkMode ? "bg-neutral-400" : "bg-neutral-200"
          }`}
        >
          <div
            className={`w-6 h-6 absolute dark:bg-neutral-700 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isDarkMode ? "translate-x-7 " : "translate-x-1  "
            }`}
          />
        </div>
        <h1 className="dark:text-white">
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </h1>
      </div>
    </>
  );
};

export default DarkMode;
