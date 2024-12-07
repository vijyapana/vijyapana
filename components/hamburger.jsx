import React, { useState, useRef, useEffect } from 'react';
import {v4 as uuid} from "uuid";
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai'; // Importing the close icon
import Link from 'next/link';

function Sidebar({services}) {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const sidebarRef = useRef(null);
  
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        closeSidebar();
      }
    };

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle expanding and collapsing of sub-items
  const toggleExpand = (item) => {
    setExpanded(expanded === item ? (!item.includes(" ") ? null : item.split(" ")[0]) : item);
  };

  return (
    <div className="flex">
      {/* Hamburger Icon or Close Icon */}
      <div className="md:hidden">
        {isOpen ? (
          <AiOutlineClose className="cursor-pointer w-6 h-6" onClick={toggleSidebar} />
        ) : (
          <RxHamburgerMenu className="cursor-pointer w-6 h-6" onClick={toggleSidebar} />
        )}
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-[150vh] z-50 bg-white shadow-md transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => closeSidebar()}>
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => toggleExpand('collections')}>
            Services
          </li>
          {expanded && expanded.startsWith('collections')  && (
            <ul className="flex flex-col pl-4 space-y-2">
              {services.map((s,idx)=>{
                return <div key={uuid()}><li className="py-1 hover:bg-gray-200 cursor-pointer" onClick={() => toggleExpand('collections '+s.name)}>
                {s.name}
              </li>
              {expanded && expanded.endsWith(s.name) && (
      <ul className="flex flex-col pl-4 space-y-1">
        
        {s?.subservices?.map((p,idx2)=>{return <Link onClick={closeSidebar} href={`/services/${idx+1}#${idx2+1}`}><li className='py-1' key={uuid()}>{p.name}</li></Link>})}
      </ul>
    )}
              </div>
              })}
            </ul>
          )}
          <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => closeSidebar()}>
            <Link href={"/about"}>About</Link>
          </li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => closeSidebar()}>
            <Link href={"/career"}>Career</Link>
          </li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => closeSidebar()}>
          <Link href={"/blog"}>Blog</Link></li>
          

          <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => closeSidebar()}>
          
          <Link href={"/faqs"}>FAQ(s)</Link></li>
         
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 h-[150vh] bg-black opacity-50 z-[20]"
          onClick={closeSidebar} // Close sidebar on overlay click
        />
      )}
    </div>
  );
}

export default Sidebar;
