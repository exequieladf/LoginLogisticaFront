"use client";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleTheme = () => {
      document.body.classList.toggle("dark-mode");
      setIsDarkMode(!isDarkMode);
    };
  
    return (
      <button onClick={toggleTheme} className="theme-toggle-btn"> 
      { isDarkMode ? <MdLightMode className="theme-icon" /> : <MdDarkMode className="theme-icon" /> }
      </button>
    );
  }