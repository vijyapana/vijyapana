import Index from '@/components/footer/Index'
import {Montserrat} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const montserrat = Montserrat({
  subsets: ['latin'],   // Define language subsets (e.g., latin, latin-ext)
  weight: ['100','200','300','400','500','600','700'],        // Choose weights like '400', '700' as needed
  style: 'normal',      // Define style (e.g., 'normal', 'italic')
});

const keywords = [
  "corporate gifting experts",
  "corporate gifting company India",
  "branding company",
  "advertising services",
  "branding agency India",
  "video production",
  "promotional gifts",
  "product photography",
  "promotional gifts supplier India",
  "custom corporate gifts India",
  "Unique Gifting Company kanpur"
];


export const metadata = {
  title: "Vijyapana Advertisements",
  description: "Vijyapana Advertisements offers expert video production, product photography, audiobook creation, and print media solutions to enhance brand visibility. Specializing in corporate gifts and social media creatives, Vijyapana delivers customized advertising services that captivate audiences. Our professional team ensures high-quality visuals and impactful content. Choose Vijyapana to elevate your brand and make a lasting impression.",
  keywords, 
  verification: {
    google: "mcuoiochofwpJiBcagsDnFbwcyJjI8DK7LxZQfHzxF4",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning
      className={`${montserrat.variable} antialiased`}
      >
        <ToastContainer />
        <Navbar/>
        {children}
        <Index/>
      </body>
    </html>
  );
}
