import React from "react";
import SocialLink from './SocialLink';
import FooterButton from './FooterButton';
import MenuLink from './MenuLink';

export default function FooterCard({ logo, socialLinks, buttons, menuLinks, copyright }) {
  return (
    <footer className='lg:pt-40 sm:pt-28 min-[1px]:pt-24px'>
      <div className='flex justify-center'>
        <img src={logo} alt="Logo" className='lg:w-[20%] w-[30%] sm:w-[30%] min-[1px]:w-[30%] my-10' />
      </div>
      <h1 className='md:text-[3rem] sm:text-[2.75rem] text-[2rem] sm:leading-[55px] font-bold text-center mb-10 '>
        Connect with Views4You on <br /> social media to see all articles
      </h1>
      <div className='flex justify-center mb-20'>
        <div className="flex justify-around w-2/4 footer-social">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
      </div>
      <div className="lg:flex-row gap-4 lg:flex justify-center space-x-3 pb-16 mb-10 border-b-[1px] border-gray-500">
        {buttons.map((button, index) => (
          <FooterButton key={index} {...button} />
        ))}
      </div>
      <div className='mb-16'>
        <ul className="menu-list flex flex-wrap justify-between sm:flex-wrap md:flex-nowrap w-full">
          {menuLinks.map((link, index) => (
            <MenuLink key={index} {...link} />
          ))}
        </ul>
      </div>
      <div className='flex justify-center'>
        <p className='text-center pb-4 w-11/12 '>
          {copyright}
        </p>
      </div>
      <div className='flex justify-center'>
        <img src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=94a7c7e8-00c7-46d7-b097-aca6d83c0e04" alt="DMCA Badge" />
      </div>
    </footer>
  );
}

