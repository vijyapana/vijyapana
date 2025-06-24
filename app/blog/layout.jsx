import React from 'react'
export async function generateMetadata({ params }) {
  const canonicalUrl = `https://vijyapana.com/blog`;
const keywords = [
  "Corporate Gifts Blog",
  "branding blog",
  "business promotion ideas",
  "advertising solutions",
  "creative gifting",
  "marketing trends",
  "Vijyapana articles"
];
  return {
    title:"Vijyapana Blog | Insights on Corporate Gifts, Branding & Advertising",
    description:"Stay updated with Vijyapana’s blog—read expert articles on corporate gifting, innovative branding, and marketing tactics to grow your business.",
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
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
