'use client'

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { getServices } from '@/lib/contentful'
import { Skeleton } from '../ui/skeleton'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// ImageSlideshow component with hover and click effect
const ImageSlideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images])

  const handleImageClick = () => {
    // Example effect on click, can be customized further
    gsap.to(`.slideshow-image-${currentImageIndex}`, {
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  return (
    <div className="relative w-full h-[250px] overflow-hidden rounded-lg my-2">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          onClick={handleImageClick}
          className={`slideshow-image-${index} absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-1000 transform 
            ${index === currentImageIndex ? 'scale-100' : 'scale-105'} 
            ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'} 
            hover:scale-110 cursor-pointer`}
        />
      ))}
    </div>
  )
}

const MarqueeCard = ({ title, images }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power2.out", 
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom", 
            end: "+=800",   
            toggleActions: "play reverse play reverse",
          }
        }
      )
    }
  }, [])

  return (
    <Card 
      ref={cardRef} 
      className="w-full mx-2 my-4 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:translate-y-1 hover:z-10"
    >
      <CardContent className="p-0">
        <ImageSlideshow images={images} />
        <h3 className="text-md font-semibold p-4 text-center uppercase">{title}</h3>
      </CardContent>
    </Card>
  )
}

export default function MarqueeCards() {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      const res = await getServices()
      setServices(res)
    }
    fetchServices()
  }, [])

  if (services.length === 0) {
    return (
      <div className="flex flex-wrap justify-center my-28">
        {new Array(6).fill().map((_, index) => (
          <Card key={index} className="w-full md:w-[48%] lg:w-[30%] mx-2 my-4">
            <CardContent className="p-0">
              <Skeleton className="w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px]" />
              <Skeleton className="h-8 mt-4 mx-4" />
            </CardContent>
            
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="w-full mb-24 -mt-4 px-4 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((card, index) => (<Link href = {`/services/${index+1}`}>
          <MarqueeCard key={`${card.id}-${index}`} title={card.name} images={card.images} />
          </Link>
        ))}
      </div>
    </div>
  )
}
