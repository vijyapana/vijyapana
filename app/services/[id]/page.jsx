import React from "react";
import { getServices } from "@/lib/contentful";
import ServicePageClient from "./ServicePageClient";

export async function generateStaticParams() {
    const services = await getServices();
    return services.map((service, idx) => ({
        id: String(idx + 1),
    }));
}

export default async function ServicePage({ params }) {
    const services = await getServices();
    const service = services[params.id - 1];

    
    return <ServicePageClient service={service} />;
}
