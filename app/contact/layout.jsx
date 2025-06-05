import React from 'react'
export async function generateMetadata() {
  const canonicalUrl = `https://vijyapana.com/contact`;

  return {
    title: "Contact Vijyapana Advertisements | Corporate Gifting & Media Services",
    description:
      "Get in touch with Vijyapana Advertisements – your trusted partner for premium corporate gifts, luxury hampers, product photography, video production, and print media services.",
    keywords: [
      "Vijyapana Advertisements contact",
      "corporate gifting company India",
      "customized gift suppliers",
      "Luxury Gift Solutions",
      "video production services",
      "product photography services",
      "print media solutions",
      "audiobook creation services",
      "Premium Gift Exporter",
      "contact gifting company Delhi",
      "Advertising agency in India",
      "advertising agency in Lucknow",
      "best advertising agency",
      "customized gift hampers",
      "Advertising agency in Gurgaon",
      "Next.js",
    ],
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
