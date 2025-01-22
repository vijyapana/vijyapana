"use client"
import React, { useState,useEffect } from 'react'
import { getServices } from '@/lib/contentful'

import { IoMdPerson } from "react-icons/io";
import Hamburger from './hamburger';
import {v4 as uuid} from "uuid"
import { Input } from "@/components/ui/input"
import { MdAudiotrack } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";

import { IoCallSharp, IoPerson } from "react-icons/io5";
import  Container from "@/components/container";
import Link from 'next/link';
function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [services,setServices] = useState([])
  useEffect(()=>{
    const get = async()=>{
      const res = await getServices()
      setServices(res);
    }
    get()
  },[])
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      // Get current scroll position
      const currentScrollY = window.scrollY;

      // If scrolling down, hide the nav bar, if scrolling up, show it
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  
  return (
    
    <div className=' py-4 z-30 bg-white shadow-md '  style={{
      transition: 'transform 0.3s ease',
      transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,}}>
          <Container className='flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center'>
      
        <div className='hidden md:block h-full'>
        <ul className="right flex text-sm font-semibold gap-x-4 tracking-normal uppercase ">
      <li className='cursor-pointer'><Link href={"/"}>Home</Link></li>
     <li className='relative cursor-pointer group '>Services
      
      <div style={{gridTemplateColumns: `repeat(${services.length}, minmax(0, 1fr))`}} className='hidden absolute  group-hover:grid gap-x-4 bg-white -bottom-0.5 translate-y-[100%] z-30 w-[80vw] -translate-x-16 border rounded-md shadow-md p-4'>
        
        {services.map((s,idx)=>{
          return <div key ={uuid()}>
          <Link href={`/services/${idx+1}`}><h1 className='font-medium text-gray-700 flex items-center gap-x-1'><FaHandPointRight/>{s.name}</h1></Link>
            <div className='ml-2'>
              {s?.subservices?.map((p,idx2)=>{
                return (
                  <Link key={idx2} href={`/services/${idx+1}#${idx2+1}`}><p key={uuid()} className='text-sm capitalize my-1.5'>{p.name}
                  {/* <Link href={`${s.url}/${p.toLowerCase().replace(/ /g, '-')}`}>{p}</Link> */}
                </p>
                </Link>
              );
              })}
            </div>
          </div>
        })}
        
    
    
      </div>
     </li>
     <li className='cursor-pointer'><Link href={"/about"}> About</Link></li>
      <li className='cursor-pointer'><Link href={"/career"}>Career</Link></li>
      <li className='cursor-pointer'><Link href={"/blog"}>Blog</Link></li>
      <li className='cursor-pointer'><Link href={"/faqs"}>FAQ(s)</Link></li>
      </ul>
        </div>
        <header className='flex justify-center items-center md:-translate-x-[8rem]'>
        <p className='text-3xl sm:text-3xl font-[600] tracking-widest text-[#353535]'><Link href={"/"}> VIJYAPANA</Link></p>
        </header>
        <div className='hidden md:block'>
        <div className="right flex gap-x-4">
      
      <Link href={"/contact"}><IoCallSharp className='h-4 w-4'/></Link>
      <Link target='_blank' href={`https://vijyapanacrm.vercel.app`}><IoPerson className='h-4 w-4'/></Link>
      </div>
        </div>
       
    <nav className='flex justify-between md:hidden'>
      <div className="left">
      <Hamburger services={services}/>
      </div>
      <div className="right flex gap-x-4">
      <Link href={"/contact"}><IoCallSharp className='h-4 w-4'/></Link>
      <Link target='_blank' href={`https://vijyapanacrm.vercel.app`}><IoPerson className='h-4 w-4'/></Link>
      </div>
    </nav>
    </Container>
    </div>
  )
}

export default Navbar
