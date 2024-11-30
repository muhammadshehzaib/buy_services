import FooterCard from './footer/FooterCard';

function Footer() {
  const footerProps = {
    logo: "https://views4you.com/wp-content/uploads/2022/08/logo@2x.png.webp",
    socialLinks: [
      { href: "https://www.youtube.com/@views4you.official", title: "Youtube", icon: "https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg" },
      { href: "https://www.linkedin.com/company/views4you/", title: "Linkedin", icon: "https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg" }
    ],
    buttons: [
      { link: '/likes', text: 'Buy YouTube Likes', price: 4.8, rating: '4.9', reviews: 12 },
      { link: '/views', text: 'Buy YouTube Views', price: 3.5, rating: '5.0', reviews: 6 },
      { link: '/subscribers', text: 'Buy YouTube Subscribers', price: 3.9, rating: '4.9', reviews: 78 }
    ],
    menuLinks: [
      { href: "https://views4you.com/offers/", text: "Offers" },
      { href: "https://views4you.com/affiliate-program/", text: "Affiliate Program" },
      { href: "https://views4you.com/privacy-policy/", text: "Privacy Policy" },
      { href: "https://views4you.com/terms-of-service/", text: "Terms of Service" },
      { href: "https://views4you.com/about-us/", text: "About Us" }
    ],
    copyright: "All materials provided by Views4You are protected by copyright laws. Any unauthorized reproduction or distribution of our materials, including videos, graphics, and text, is strictly prohibited. Unauthorized use of our materials may lead to legal action. Views4You operates independently and is not affiliated with any social media platform."
  };

  return (
    <div>
      <FooterCard {...footerProps} />
    </div>
  );
}

export default Footer;
