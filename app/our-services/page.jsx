import React from 'react';
import { footerConfig } from '@/lib/footerConfig';
import { FaGift,FaPrint, FaPaintBrush, FaMicrophone, FaCameraRetro, FaCode } from 'react-icons/fa';
export async function generateMetadata({ params }) {
  const canonicalUrl = `https://vijyapana.com/our-services`;
const keywords = [
  "corporate gifting",
  "branding services",
  "advertising solutions",
  "product photography",
  "video production",
  "print media",
  "creative services",
  "Vijyapana services"
];

  return {
    title:"Our Services | Creative Branding, Gifting & Media Solutions – Vijyapana",
    description:"Vijyapana offers complete services, including custom corporate gifts, creative branding, quality product photography, video ads, and print marketing support.",
    alternates: {
      canonical: canonicalUrl,
    },
    keywords
  };
}
import Link from 'next/link';

const serviceIcons = {
  "Corporate Gifts": FaGift,
  "Print Media": FaPrint,
  "Social Media Creatives": FaPaintBrush,
  "Audio Production": FaMicrophone,
  "Photo/Video Shoots": FaCameraRetro,
  "Web & App Development": FaCode,
};

function Page() {
  return (
    <>
    
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mt-24 md:mt-20 font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {footerConfig.ourProducts.links.map((service, index) => {
          const IconComponent = serviceIcons[service.name];
          return (
            <Link href={service.href} key={index}>
              <div
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
              >
                {IconComponent && (
                  <IconComponent className="text-6xl text-blue-500 mb-4" />
                )}
                <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
                <p className="text-gray-600">Discover our {service.name.toLowerCase()} solutions tailored for your needs.</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </>
  );
}

export default Page;
