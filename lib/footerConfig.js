import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

export const footerConfig = {
  aboutUs: {
    title: "About Us",
    description: "With over 8 years of experience in the advertising industry, we specialize in delivering premium and luxury solutions tailored to elevate your brand. From stunning websites and social media creatives to ID cards, letterheads, print media, corporate gift hampers, product and video ads, graphic design, voice-overs, and digital ads, we are your one-stop solution for all advertising needs."
  },
  importantLinks: {
    title: "Important Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Career", href: "/career" },
      { name: "Blog", href: "/blog" },
      { name: "FAQ(s)", href: "/faqs" }
    ]
  },  ourProducts: {
    title: "Our Services",
    links: [
      { name: "Corporate Gifts", href: "/services/1" },
      { name: "Print Media", href: "/services/2" },
      { name: "Social Media Creatives", href: "/services/3" },
      { name: "Audio Production", href: "/services/4" },
      { name: "Photo/Video Shoots", href: "/services/5" },
      { name: "Web & App Development", href: "/services/6" }
    ]
  },
  contactUs: {
    title: "Contact Us",
    address: "2nd floor Workforce Alliance 117/Q/710 Sharada Nagar Kakadev Kanpur",
    phone: "+91 9889519102",
    email: "support@vijyapana.com"
  },
  socialLinks: [
    { 
      id: 1,
      icon: FaInstagram,
      link: "https://www.instagram.com/vijyapana"
    },
    { 
      id: 2,
      icon: FaLinkedin,
      link: "https://www.linkedin.com/company/vijyapana/"
    },
    { 
      id: 3,
      icon: FaFacebook,
      link: "https://www.facebook.com/people/Vijyapana/61568464812343/"
    },
    { 
      id: 4,
      icon: FaYoutube,
      link: "https://youtube.com/@vijyapana"
    }
  ]
};
