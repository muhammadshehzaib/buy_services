import React from 'react';
import { Card } from './Card';

export function ToolGrid({ tools }) {
  if (!tools || tools.length === 0) {
    return null;
  }

  return (
    <div className="space-y-16">
      {[...Array(Math.ceil(tools.length / 3))].map((_, sectionIndex) => (
        <div key={sectionIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.slice(sectionIndex * 3, sectionIndex * 3 + 3).map((tool, index) => (
            <Card key={index} {...tool} />
          ))}
        </div>
      ))}
    </div>
  );
}

