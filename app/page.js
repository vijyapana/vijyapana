
import Hero from "@/components/hero";
import ImageSlideShow from "@/components/ImageSlideShow";
import Imgtext from "@/components/Imgtext";
import Products from "@/components/products";
import SectionTitle from "@/components/SectionTitle";

import Services from "@/components/services/index";
import Testimonials from "@/components/testimonials";
import Image from "next/image";
export default function Home() {
  return (<>
    
    <Hero/>
<Products/>
   <Imgtext text="creative solutions<br />for every Business needs."/>
    <Services/>
    <SectionTitle text={"Product Showcase"}></SectionTitle>
    <ImageSlideShow/>
    <Testimonials/>
    </>
  );
}
