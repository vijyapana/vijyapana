// pages/contact.js
"use client";
import { useCallback, useState } from "react";
import { Button, } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
// pages/contact.js
// pages/contact.js
// pages/contact.js
import Image from "next/image";
import { toast } from "react-toastify";
import Link from "next/link";




export default function ContactUs() {
  const [isSubmitting,setIsSubmitting] = useState(false);
  const handleSubmit = useCallback((e) => {
    setIsSubmitting(true)
    e.preventDefault();
  
    // Use FormData to gather data from the form
    const formData = new FormData(e.currentTarget);
  
    // Convert formData to a regular object to view the data
    const formValues = Object.fromEntries(formData.entries());
    fetch('https://sheetdb.io/api/v1/auhiou07ys52z', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          data: [
                  formValues
          ]
      })
  })
    .then((response) => toast.success("Submitted"))
    .finally(()=>{setIsSubmitting(false)})
    // Here you can send formValues to your API or backend
    // Example: await fetch('/api/submit', { method: 'POST', body: JSON.stringify(formValues) });
  
    // Optionally, reset the form after submission

    e.target.reset();
  }, []);
  return (
    <div className="container mx-auto my-32 md:my-24 p-6 md:p-10 bg-white rounded-lg">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
        Get in Touch with us
      </h1>
      <p className="text-gray-700 mb-16 max-w-6xl mx-auto text-md md:text-lg text-justify">
        Vijyapana Advertisements is a renowned supplier, exporter, and trader of customized corporate gifts and
luxury gifting solutions. We also offer expert video production, product photography, audiobook creation, and print
media services to help brands enhance their visibility.
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
        
        {/* Left Side: Stock Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/contact.png" // Replace with your stock image path
            alt="Contact Us"
            width={500}
            height={350}
            
          />
        </div>
        
        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-gray-800 font-semibold">
          Name
        </label>
        <input
          id="name"
          name="name" // Include name attribute to work with FormData
          type="text"
          required
          placeholder="Your Name"
          className="w-full mt-2 p-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-gray-800 font-semibold">
          Phone Number
        </label>
        <input
          id="phone"
          maxLength={10}
          required
          name="phone" // Include name attribute to work with FormData
          type="tel"
          placeholder="Your Phone Number"
          className="w-full mt-2 p-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-800 font-semibold">
          Email
        </label>
        <input
          id="email"
          name="email" // Include name attribute to work with FormData
          required
          type="email"
          placeholder="Your Email"
          className="w-full mt-2 p-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div>
        <button
        disabled={isSubmitting}
          type="submit"
          className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-lg transition duration-300 hover:bg-gray-700"
        >
          Send
        </button>
      </div>
    </form>

          {/* Contact Details */}
          <div className="mt-10 text-gray-600 space-y-3">
            <p>
              <strong>Support Email:</strong> <Link href={"mailto:support@vijyapana.com"}>Write to us at: support@vijyapana.com</Link>
            </p>
            <p>
              <strong>WhatsApp:</strong> +91 9889519102
            </p>
            <p>
              <strong>Contact No:</strong> +91 9889519102
            </p>
          </div>
        </div>
      </div>
      {/* Responsive Google Map with Contact Info */}
      <div className="mt-24 flex flex-col md:flex-row justify-center items-stretch gap-8">
        {/* Map */}
        <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.1044291460134!2d80.28447492465642!3d26.48458227835964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3903054027c1%3A0x2d241fc716872844!2sWorkforce%20Alliance%20(Co%20Working%20Space%20in%20Kanpur)!5e0!3m2!1sen!2sin!4v1750508797371!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Google Map Location"
          ></iframe>
        </div>
        {/* Contact Info Card */}
        <div className="w-full md:w-1/2 flex items-center">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg p-8 flex flex-col justify-center min-h-[250px]">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center md:text-left">Contact Info</h2>
            <div className="text-gray-700 space-y-5 text-center md:text-left">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                {/* Address Icon */}
                <span className="mt-1 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-4.03-8-9.001C4 7.134 7.134 4 12 4s8 3.134 8 7.999C20 16.97 16.418 21 12 21z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                </span>
                <span>
                  <span className="block font-semibold">2nd floor Workforce Alliance</span>
                  <span className="block">117/Q/710 Sharda Nagar Kakadev Kanpur</span>
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                {/* Phone Icon */}
                <span className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.086c.414 0 .81.168 1.102.467l2.012 2.088a1.5 1.5 0 01.326 1.636l-.805 2.013a.75.75 0 00.172.82l3.457 3.457a.75.75 0 00.82.172l2.013-.805a1.5 1.5 0 011.636.326l2.088 2.012c.299.292.467.688.467 1.102v2.086a2.25 2.25 0 01-2.25 2.25h-.75C6.798 21 3 17.202 3 12.75v-.75z" />
                  </svg>
                </span>
                <span>
                  <span className="block font-semibold">Phone:</span>
                  <a href="tel:+919889519102" className="text-gray-900 hover:underline">+91 9889519102</a>
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                {/* Email Icon */}
                <span className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.091 7.091a2.25 2.25 0 01-3.182 0L3.409 8.584A2.25 2.25 0 012.75 6.993V6.75" />
                  </svg>
                </span>
                <span>
                  <span className="block font-semibold">Email:</span>
                  <a href="mailto:support@vijyapana.com" className="text-gray-900 hover:underline">support@vijyapana.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
