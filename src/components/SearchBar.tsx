import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { sections, Section, CodeExample } from '../data/cheatsheetData';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

type SearchResult = {
  sectionId: string;
  sectionTitle: string;
  matchText: string;
  type: 'title' | 'description' | 'code';
};

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results: SearchResult[] = [];
    const query = value.toLowerCase();

    sections.forEach((section) => {
      // Search in section title
      if (section.title.toLowerCase().includes(query)) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          matchText: section.title,
          type: 'title'
        });
      }

      // Search in code examples
      section.examples.forEach((example) => {
        if (example.code.toLowerCase().includes(query) || 
            (example.description && example.description.toLowerCase().includes(query))) {
          results.push({
            sectionId: section.id,
            sectionTitle: section.title,
            matchText: example.description || example.code.substring(0, 30) + '...',
            type: 'code'
          });
        }
      });
    });

    setSearchResults(results.slice(0, 5)); // Limit to 5 results
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleResultClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
    onChange('');
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search size={16} className="text-gray-400" />
        </div>
        <input
          type="search"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(e.target.value.trim() !== '');
          }}
          onClick={() => setIsOpen(value.trim() !== '')}
          placeholder="Search..."
          className="block w-full md:w-64 pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>
      
      {isOpen && searchResults.length > 0 && (
        <div className="absolute z-50 mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 max-h-80 overflow-y-auto">
          {searchResults.map((result, index) => (
            <button
              key={index}
              onClick={() => handleResultClick(result.sectionId)}
              className="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
            >
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {result.sectionTitle}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {result.matchText}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;