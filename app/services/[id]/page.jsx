import React from "react";
import { getServices } from "@/lib/contentful";
import ServicePageClient from "./ServicePageClient";
import Head from "next/head";

export async function generateMetadata({ params }) {
  const canonicalUrl = `https://vijyapana.com/services/${params.id}/`;

  return {
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
export async function generateStaticParams() {
    const services = await getServices();
    
    
    return services.map((service, idx) => ({
        id: service.name.toLowerCase().replace(/\s+/g, "-")
    }));
}

export default async function ServicePage({ params }) {
    const canonicalUrl = `https://vijyapana.com/services/${params.id}/`;
    const services = await getServices();
    const service = services.find(
    (s) => s.name.toLowerCase().replace(/\s+/g, "-") === params.id
  );

    
    return <>
     <Head>
        <link rel="canonical" href={canonicalUrl} />
    </Head>
    <ServicePageClient service={service} /></>;
}
