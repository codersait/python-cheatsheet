import { Menu, X } from 'lucide-react';
import React, { ReactNode, useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Close sidebar when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Prevent scrolling when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Backdrop overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

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
        } md:left-0 shadow-lg md:shadow-none`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="sticky top-0 z-30 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-8 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center shadow-sm">
          <div className="ml-10 md:ml-0 text-base sm:text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400 truncate">
            Python Cheatsheet
          </div>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 p-2 sm:p-4 md:p-8 max-w-6xl mx-auto w-full bg-gray-50 dark:bg-gray-900">
          <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
            {children}
          </div>
        </main>

        <footer className="py-4 sm:py-5 md:py-6 px-4 md:px-8 border-t border-gray-200 dark:border-gray-700 text-sm text-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
          <p className="text-xs md:text-sm">
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
          <p className="mt-2 sm:mt-3">
            <a
              href="https://buymeacoffee.com/codersait"
              target="_blank"
              className="inline-flex items-center justify-center gap-1 px-3 py-1.5 text-xs md:text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 shadow-sm transition-colors"
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
