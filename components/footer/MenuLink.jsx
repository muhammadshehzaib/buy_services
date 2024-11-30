import React from 'react';

const MenuLink = ({ href, text }) => (
  <li className='text-[18px] font-bold'>
    <a href={href}>{text}</a>
  </li>
);

export default MenuLink;

