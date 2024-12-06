import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const FAQSkeleton = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        {/* Skeleton for Page Title */}
        <Skeleton className="h-8 w-1/4 mx-auto" />
      </div>
      <div className="space-y-4">
        {/* Repeatable Skeleton for FAQ Items */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm">
            {/* Skeleton for Question */}
            <Skeleton className="h-6 w-3/4 mb-2" />
            {/* Skeleton for Answer */}
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-5/6 mb-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSkeleton;
