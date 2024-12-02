import React from 'react';

const ReasonSection = ({ title, content, isMainSection = false, className = '' }) => {
  return (
    <div className={`${isMainSection ? '' : 'bg-[#F4F6F8] rounded-2xl'} xl:p-10 min-[1px]:p-5 ${className}`}>
      {!isMainSection && (
        <img
          src="https://views4you.com/wp-content/themes/views4you_theme/img/list-icon.svg"
          alt="OK Logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      )}
      <h1 className="font-montserrat 2xl:w-full sm:text-[32px] min-[1px]:text-[23px] font-bold text-gray-800 mb-4">
        {title}
      </h1>
      <p className='text-[18px]'>{content}</p>
    </div>
  );
};

export default ReasonSection;

