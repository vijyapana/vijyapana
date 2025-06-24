import React from 'react'
export async function generateMetadata({ params }) {
  const canonicalUrl = `https://vijyapana.com/faqs`;
const keywords = [
  "Vijyapana FAQs",
  "gifting questions",
  "advertising FAQs",
  "branding FAQs",
  "corporate gifting help",
  "customer help Vijyapana",
  "service support"
];

  return {
    title:"Vijyapana FAQs | Get Help with Gifting, Branding & Advertising",
    description:"Vijyapana’s FAQs to learn more about our gifting solutions, branding, and advertising services to help you get started with confidence.",
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
