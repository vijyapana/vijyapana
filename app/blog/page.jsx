"use client"
import BlogPostCard from '@/components/blog/BlogPostCard'
import BlogPostCardSkeleton from '@/components/blog/BlogPostSkeleton'
import Container from '@/components/container'
import { getBlogPosts } from '@/lib/contentful'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
function page() {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    const get = async()=>{
    const res = await getBlogPosts();
    console.log(res);
    
    setPosts(res);
    }
    get()
  },[])
  if (posts.length==0) {
    return <BlogPostCardSkeleton/>
  }
  return (
    <Container className='mt-36 md:mt-28'>
        <div className='mb-16'>
    <p className='text-center mb-1 font-medium tracking-wide'>Explore Our Blog Posts</p>
    <h2 className='text-4xl text-center text-gray-800  font-bold tracking-wider'>
      Vijyapana Blog
    </h2>
    </div>
    <div className='grid mt-8 gap-x-12 gap-y-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {
        posts.map((post,idx)=>{
            return <Link key={idx} href={`/blog/posts/${idx+1}`}><BlogPostCard title={post.titleshort} body={post.body} date={post.date} img={post.image}/></Link>
        })
    }
    </div>
    </Container>
  )
}

export default page
