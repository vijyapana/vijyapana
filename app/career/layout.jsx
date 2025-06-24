import React from 'react'
export async function generateMetadata({ params }) {
  const canonicalUrl = `https://vijyapana.com/career`;
const keywords = [
  "Vijyapana jobs",
  "careers at Vijyapana",
  "advertising careers",
  "branding jobs",
  "gifting industry jobs",
  "marketing careers",
  "working with the Vijyapana team"
];

  return {
    title:"Careers at Vijyapana | Join Our Creative Advertising & Gifting Team",
    description:"Looking for a creative career? Vijyapana offers exciting roles in marketing, gifting, advertising, and branding. Join us and grow your skills.",
    alternates: {
      canonical: canonicalUrl,
    },
    keywords
  };
}
function layout({children}) {
  return (
    <>
     {children} 
    </>
  )
}

export default layout
