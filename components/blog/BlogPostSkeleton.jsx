import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Adjust this import based on your project structure.
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Container from "../container";

function BlogPostCardSkeleton() {
    return <Container className="'mt-36 md:mt-28"> <div className='mb-16'>
    <p className='text-center mb-1 font-medium tracking-wide'>Explore Our Blog Posts</p>
    <h2 className='text-4xl text-center text-gray-800  font-bold tracking-wider'>
      Vijyapana Blog
    </h2>
    </div><div className=" gap-x-12 gap-y-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {new Array(3).fill(0).map((_,idx)=>{return (    
      <Card>
        <CardHeader>
          <Skeleton className="h-48 w-full" />
        </CardHeader>
        <CardContent className="mt-8">
          <Skeleton className="h-4 w-1/4 mb-2" /> {/* Date */}
          <Skeleton className="h-6 w-3/4 mb-4" /> {/* Title */}
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6" /> {/* Body */}
        </CardContent>
        <CardFooter>
          <Skeleton className="h-4 w-24" /> {/* Read More */}
        </CardFooter>
      </Card>)
})}
    
    </div>
    
    </Container>
}

export default BlogPostCardSkeleton;
