import { Menu, X } from 'lucide-react';
import React, { ReactNode, useState } from 'react';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Mobile sidebar toggle */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white dark:bg-gray-800 p-2 rounded-md shadow-md"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:sticky top-0 h-screen z-40 transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'left-0' : '-left-72'
        } md:left-0`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm py-4 px-6 md:px-8 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="ml-8 md:ml-0 text-xl font-bold text-blue-600 dark:text-blue-400">
            Python Cheatsheet
          </div>
          <div className="flex items-center gap-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 p-6 md:p-8 max-w-6xl mx-auto w-full">
          {children}
        </main>

        <footer className="py-6 px-8 border-t border-gray-200 dark:border-gray-700 text-sm text-center text-gray-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Python Cheatsheet. Created with ❤️ by{' '}
            <a
              href="https://suli.digital"
              target="_blank"
              className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>Suli Digital</span>
            </a>
            .
          </p>
          <p className="mt-2">
            <a
              href="https://buymeacoffee.com/codersait"
              target="_blank"
              className="inline-flex items-center gap-1 px-3 py-1 mt-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
            >
              ☕ Buy Me a Coffee
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
