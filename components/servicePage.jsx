"use client"

import { useInterval } from "react-use";
import { Skeleton } from '@/components/ui/skeleton'
import React, { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TalkToUsBTN from "./TalkToUsBTN";
import Container from "./container";
import { FaFilePdf } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import RichTextRenderer from "./blog/RichTextFormatter";


const Slideshow = ({ images }) => {
    const [index, setIndex] = useState(0)
    const [nextImageIndex, setNextImageIndex] = useState((index + 1) % images.length)
  
    // Preload the next image
    useEffect(() => {
      const preloadImage = new Image()
      preloadImage.src = images[nextImageIndex]
    }, [nextImageIndex, images])
  
    // Cycle through images every 5 seconds
    useInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length
        setNextImageIndex((newIndex + 1) % images.length)  // Set the next image index
        return newIndex
      })
    }, 5000)
  
    return (
      <div className="relative mt-12 w-full h-[570px] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`Slideshow image ${index + 1}`}
            className="absolute top-0 left-0 w-full h-full object-top object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
    )
  }
  
  // Wrap the Slideshow component in Suspense
  const SuspenseSlideshow = ({ images }) => {
    return (
      <Suspense fallback={<Skeleton className="w-full h-[570px]" />}>
        <Slideshow images={images} />
      </Suspense>
    )
  }


export default function Cat({images,name,desc,pdf,video}) {
  return (
   <>
    <section className="flex flex-col md:flex-row items-center justify-center gap-6 gap-x-12 p-6 mt-12 mb-2">
      {/* Left Side: Image */}
      <div className="flex-shrink-0 w-full md:w-1/2">
       <SuspenseSlideshow images={images} />
      </div>

      {/* Right Side: Content */}
      <div className="flex flex-col self-start mt-2 md:mt-12 w-full text-justify md:w-1/3 md:text-left ">
        <h2 className="text-2xl font-semibold mb-4 md:mb-6">{name}</h2>
        <p className="text-gray-600 text-sm mb-6 leading-6 md:leading-6">
          {<RichTextRenderer richTextDocument={desc}/>}
        </p>

        {/* Buttons */}
        
        <div className="flex mt-8 justify-start md:justify-start gap-4">
          {pdf && <Link href={pdf}>
          <Button className="px-6 py-2 rounded-none  flex items-center gap-x-1">
            <FaFilePdf/> Download Catalogue
          </Button>
          </Link>}
          <TalkToUsBTN className={'shadow-none rounded-none'}/>
        </div>

        
      </div>
      {/* {video} */}
 
    </section>
         {video && <Container className="">
          <div className="w-full md:w-[89%] mx-auto h-[480px]">
              <video className="w-full h-full" autoPlay muted src={video}>
    
  </video> 
          </div>
  </Container>

}</>
  );
};


