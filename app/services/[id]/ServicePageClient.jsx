"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Cat from "@/components/servicePage";
import RichTextRenderer from "@/components/blog/RichTextFormatter";

export default function ServicePageClient({ service }) {
    
    console.log(service);
    
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
                    backgroundSize: "contain",
                }}
                className="mt-24 md:mt-16 h-[40vh] relative flex items-center justify-center text-white"
            >
                <h1 className="z-10 uppercase text-2xl sm:text-3xl font-semibold tracking-wider">
                    {service?.name}
                </h1>
                <div className="absolute inset-0 bg-[rgb(0,0,0,0.4)]"></div>
            </div>

            {service?.subservices?.map((subservice, idx) => (
                <div id={idx+1} key={idx} ref={(el) => (subserviceRefs.current[idx] = el)}
                className="bg-white  overflow-hidden transition-transform transform">
                    <Cat
                        images={subservice?.images}
                        name={subservice?.name}
                        desc={subservice?.desc}
                        pdf={subservice?.pdf}
                        video={subservice?.video}
                        
                    />
                </div>
            ))}
        </>
    );
}
