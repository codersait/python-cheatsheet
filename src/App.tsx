import React, { useEffect } from 'react';
import Layout from './components/Layout';
import CheatsheetSection from './components/CheatsheetSection';
import { sections } from './data/cheatsheetData';
import { PythonIcon, CodeIcon } from './components/Icons';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = 'Python Cheatsheet';
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <header className="py-12 mb-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <PythonIcon className="h-16 w-16 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Python Cheatsheet
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive reference guide for Python programming with essential syntax and examples.
          </p>
        </header>

        <div className="space-y-4 mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h2 className="text-xl font-semibold flex items-center">
            <CodeIcon className="h-5 w-5 mr-2 text-blue-500" />
            <span>How to Use This Cheatsheet</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Browse through different sections using the sidebar navigation or search for specific Python topics.
            Click the copy button to copy code snippets to your clipboard.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
              Comprehensive examples
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
              Copy-to-clipboard
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100">
              Dark/light mode
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100">
              Search functionality
            </span>
          </div>
        </div>

        <main>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {sections.map((section) => (
              <CheatsheetSection key={section.id} section={section} />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default App;