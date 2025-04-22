import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user preference in localStorage or system preferences
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 sm:p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun size={16} className="sm:w-5 sm:h-5" />
      ) : (
        <Moon size={16} className="sm:w-5 sm:h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
