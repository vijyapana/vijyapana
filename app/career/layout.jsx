import React from 'react'
export async function generateMetadata({ params }) {
  const canonicalUrl = `https://vijyapana.com/career`;

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
