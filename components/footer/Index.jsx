import React from 'react'
import { FaHeart, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Container from '../container';
import Link from 'next/link';
import { footerConfig } from '@/lib/footerConfig';

function Index() {
  const { aboutUs, importantLinks, ourProducts, contactUs, socialLinks } = footerConfig;

  return (<Container>    <footer className='mt-24 pt-12 border-t-2'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-8 mb-12'>
        {/* About Us */}
        <div className='md:col-span-4'>
          <h3 className='text-lg font-semibold mb-4'>{aboutUs.title}</h3>
          <p className='text-gray-600 text-sm leading-relaxed'>{aboutUs.description}</p>
        </div>        {/* Important Links */}
        <div className='md:col-span-2'>
          <h3 className='text-lg font-semibold mb-4'>{importantLinks.title}</h3>
          <ul className='space-y-2'>
            {importantLinks.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className='text-gray-600 hover:text-gray-900 text-sm'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>        {/* Our Products */}
        <div className='md:col-span-3'>
          <h3 className='text-lg font-semibold mb-4'>{ourProducts.title}</h3>
          <ul className='grid grid-cols-1 gap-x-4 gap-y-2'>
            {ourProducts.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className='text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>        {/* Contact Us */}
        <div className='md:col-span-3'>
          <h3 className='text-lg font-semibold mb-4'>{contactUs.title}</h3>
          <div className='space-y-2 text-sm text-gray-600'>
            <p className='flex items-center gap-2'>
              <FaMapMarkerAlt className='flex-shrink-0' />
              {contactUs.address}
            </p>
            <p className='flex items-center gap-2'>
              <FaPhone className='flex-shrink-0' />
              {contactUs.phone}
            </p>
            <Link href={`mailto:${contactUs.email}`} className='flex items-center gap-2 hover:text-gray-900'>
              <FaEnvelope className='flex-shrink-0' />
              {contactUs.email}
            </Link>
          </div>
          
          {/* Social Links */}
          <div className='mt-4 flex gap-4'>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link 
                  key={social.id} 
                  href={social.link} 
                  target='_blank'
                  className='text-gray-600 hover:text-gray-900 text-xl'
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
    <footer className='border-t-2 py-6'>
      <div className='space-y-4'>
        <p className='text-xs text-gray-500 text-center'>
          © {new Date().getFullYear()} Vijyapana. All Rights Reserved. This website and its content, including text, images, graphics, and designs, are the property of Vijyapana and are protected by copyright, trademark, and other intellectual property laws.
        </p>
        <p className='text-sm font-semibold text-gray-600 flex items-center justify-center'>
          Made with <FaHeart className='mx-1.5 text-red-500 inline'/> in India
        </p>
      </div>
    </footer>
  </Container>
  )
}



export default Index
