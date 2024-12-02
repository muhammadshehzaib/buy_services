import React from 'react';
import ReasonSection from './ReasonSection';

const ReasonsContainer = ({ mainTitle, mainContent, reasons }) => {
  const firstHalf = reasons.slice(0, 2);
  const secondHalf = reasons.slice(2);

  return (
    <div className='md:flex gap-11'>
      <div className='main md:w-2/4'>
        <ReasonSection
          title={mainTitle}
          content={mainContent}
          isMainSection={true}
        />
        {firstHalf.map((reason, index) => (
          <ReasonSection
            key={index}
            title={reason.title}
            content={reason.content}
            className={index > 0 ? 'mt-8' : ''}
          />
        ))}
      </div>
      <div className='scnd-main md:w-2/4'>
        {secondHalf.map((reason, index) => (
          <ReasonSection
            key={index}
            title={reason.title}
            content={reason.content}
            className={index > 0 ? 'mt-8' : 'sm:mt-8 md:mt-0'}
          />
        ))}
      </div>
    </div>
  );
};

export default ReasonsContainer;

