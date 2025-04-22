import React from 'react';
import { sections } from '../data/cheatsheetData';
import { PythonIcon } from './Icons';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      onClose();
    }
  };

  return (
    <aside className="w-72 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <PythonIcon className="h-10 w-10" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Python Cheatsheet</h1>
        </div>
        
        <nav className="mt-6 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="w-full text-left px-3 py-2 rounded-md transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;