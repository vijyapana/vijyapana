import { getServices } from '@/lib/contentful';

import React from 'react'
import Cat from "@/components/servicePage";
export async function generateMetadata({ params }) {
  const canonicalUrl = `https://vijyapana.com/services/${params.id}/${params.id2}`;

  return {
    
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export async function generateStaticParams() {
   const services = await getServices();

  const paths = [];

  for (const service of services) {
    const categorySlug = service.name.toLowerCase().split(" ")[0];

    for (const sub of service.subservices || []) {
      const subSlug = sub.name.toLowerCase().replace(/\s+/g, "-");

      paths.push({
        id: categorySlug,
        id2: subSlug,
      });
    }
  }

  return paths;
}

async function page({params}) {
  const services = await getServices();
  
  const allservices = services.filter((s)=>s.name.toLowerCase().split(" ")[0]==params.id)[0]
  const subservice = allservices.subservices.filter((s)=>s.name.toLowerCase().replace(/\s+/g, "-")==params.id2)[0]

  
  return (
    <>

     <div
                style={{
                    backgroundImage: `url('${allservices?.bgImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition:"center"
                }}
                className="mt-24 md:mt-16 h-[40vh] relative flex items-center justify-center text-white"
            >
                <h1 className="z-10 uppercase text-2xl sm:text-3xl font-semibold tracking-wider">
                    {allservices?.name}
                </h1>
                <div className="absolute inset-0 bg-[rgb(0,0,0,0.4)]"></div>
            </div>
   <div className="bg-white  overflow-hidden transition-transform transform">
                       <Cat
                           images={subservice?.images}
                           name={subservice?.name}
                           desc={subservice?.desc}
                           pdf={subservice?.pdf}
                           video={subservice?.video}
                           
                       />
                   </div>         
</>
  )
}

export default page
