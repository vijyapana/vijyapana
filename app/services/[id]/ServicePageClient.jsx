"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Cat from "@/components/servicePage";

export default function ServicePageClient({ service }) {
    
    const subserviceRefs = useRef([]);

    useEffect(() => {
     
        if (subserviceRefs.current.length > 0) {
            gsap.fromTo(
                subserviceRefs.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,        
                    y: 0,              
                    stagger: 0.5,     
                    duration: 0.8,     
                    ease: "power2.out", 
                }
            );
        }
    }, [service]); 

    return (
        <>
            <div
                style={{
                    backgroundImage: `url('${service?.bgImage}')`,
                    backgroundSize: "cover",
                }}
                className="mt-24 md:mt-16 h-[40vh] relative flex items-center justify-center text-white"
            >
                <h1 className="z-10 uppercase text-2xl sm:text-3xl font-semibold tracking-wider">
                    {service?.name}
                </h1>
                <div className="absolute inset-0 bg-[rgb(0,0,0,0.4)]"></div>
            </div>

            {service?.subservices?.map((subservice, idx) => (
                <div key={idx} ref={(el) => (subserviceRefs.current[idx] = el)}
                className="bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl m-6">
                    <Cat
                        images={subservice?.images}
                        name={subservice?.name}
                        desc={subservice?.description}
                        pdf={subservice?.pdf}
                        video={subservice?.video}
                        
                    />
                </div>
            ))}
        </>
    );
}
