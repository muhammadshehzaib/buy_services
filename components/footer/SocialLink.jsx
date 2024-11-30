import React from 'react';

const SocialLink = ({ href, title, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="data-link" title={title}>
    <img src={icon} alt={title} className='h-14 w-14' />
  </a>
);

export default SocialLink;

