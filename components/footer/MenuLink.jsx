import React from 'react';

const MenuLink = ({ href, text }) => (
  <li className='text-[18px] font-bold'>
    <a href={href} className=''>{text}</a>
  </li>
);

export default MenuLink;

