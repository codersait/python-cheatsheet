import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  description?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'python', description }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-4 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md">
      {description && (
        <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-200">
          {description}
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm font-mono">
          <code>{code}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-700 rounded-md shadow-sm opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-gray-500 dark:text-gray-400" />}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;