import React from "react";
import { getServices } from "@/lib/contentful";
import ServicePageClient from "./ServicePageClient";

export async function generateStaticParams() {
    const services = await getServices();
    
    
    return services.map((service, idx) => ({
        id: service.name.toLowerCase().replace(/\s+/g, "-")
    }));
}

export default async function ServicePage({ params }) {
    const services = await getServices();
    const service = services.find(
    (s) => s.name.toLowerCase().replace(/\s+/g, "-") === params.id
  );

    
    return <ServicePageClient service={service} />;
}
