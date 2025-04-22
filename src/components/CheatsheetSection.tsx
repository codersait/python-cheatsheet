import React from 'react';
import { Section } from '../data/cheatsheetData';
import CodeBlock from './CodeBlock';

interface CheatsheetSectionProps {
  section: Section;
}

const CheatsheetSection: React.FC<CheatsheetSectionProps> = ({ section }) => {
  return (
    <section
      id={section.id}
      className="py-6 sm:py-8 scroll-mt-16 sm:scroll-mt-20 px-4 sm:px-6"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center">
        {section.title}
      </h2>

      <div className="space-y-4 sm:space-y-6">
        {section.examples.map((example, index) => (
          <div key={index} className="animate-fade-in">
            <CodeBlock
              code={example.code}
              description={example.description}
              sectionId={section.id}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CheatsheetSection;
