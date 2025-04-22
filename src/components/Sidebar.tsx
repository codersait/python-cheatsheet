import { ChevronDown, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { sections } from '../data/cheatsheetData';
import { PythonIcon } from './Icons';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      onClose();
    }
  };

  const scrollToSubsection = (sectionId: string, index: number) => {
    // Create a unique ID for the subsection based on section ID and example index
    const subsectionId = `${sectionId}-example-${index}`;
    const element = document.getElementById(subsectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      onClose();
    }
  };

  return (
    <aside className="w-64 sm:w-72 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <PythonIcon className="h-8 w-8 sm:h-10 sm:w-10" />
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            Python Cheatsheet
          </h1>
        </div>

        <nav className="mt-4 sm:mt-6 space-y-1">
          {sections.map((section) => (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              >
                <span
                  className="font-medium truncate"
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection(section.id);
                  }}
                >
                  {section.title}
                </span>
                {expandedSections[section.id] ? (
                  <ChevronDown className="h-4 w-4 flex-shrink-0 ml-1" />
                ) : (
                  <ChevronRight className="h-4 w-4 flex-shrink-0 ml-1" />
                )}
              </button>

              {expandedSections[section.id] && (
                <div className="ml-3 sm:ml-4 mt-1 space-y-1">
                  {section.examples.map(
                    (example, index) =>
                      example.description && (
                        <button
                          key={`${section.id}-${index}`}
                          onClick={() => scrollToSubsection(section.id, index)}
                          className="w-full text-left px-2 sm:px-3 py-1.5 rounded-md transition-colors text-gray-600 dark:text-gray-400 text-xs sm:text-sm hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none truncate"
                        >
                          {example.description}
                        </button>
                      )
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
