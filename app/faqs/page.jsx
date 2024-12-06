"use client"
import React, { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Container } from "@/components/container";
import PostBreadCrumps from "@/components/blog/PostBreadCrumps";
import { getFaqs } from "@/lib/contentful";
import BlogPostCardSkeleton from "@/components/blog/BlogPostSkeleton";
import RichTextRenderer from "@/components/blog/RichTextFormatter";
import FAQSkeleton from "@/components/faq/skeleton";

const FAQPage = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  

  const toggleAnswer = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };
  const [faqs,setFaq] = useState([]);
  useEffect(()=>{
    const get = async()=>{
    const res = await getFaqs();
    
    
    setFaq(res);
    }
    get()
  },[])
  if (faqs.length==0) {
    return <FAQSkeleton/>
  }
  return (
      <div className="max-w-2xl mx-auto p-6 mt-36 md:mt-28">
      {/* Breadcrumb */}
      <Breadcrumb>
    <BreadcrumbList>
    
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Faq(s)</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
      <h1 className="text-3xl font-bold text-center mb-6">FAQs</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm">
            <button
              className="text-lg font-medium text-left w-full"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openQuestionIndex === index ? "max-h-[500px] opacity-1 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"
              }`}
            >
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default FAQPage;
