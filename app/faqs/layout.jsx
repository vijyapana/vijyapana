import React from 'react'
export async function generateMetadata({ params }) {
  const canonicalUrl = `https://vijyapana.com/faqs`;

  return {
    
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
