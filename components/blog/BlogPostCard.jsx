
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import RichTextRenderer from './RichTextFormatter'
  
function BlogPostCard({title,body,date,img}) {
  return (
    <div className='border ml-4'>
    <Card>
    <CardHeader>
      <img src={img}></img>
    </CardHeader>
    <CardContent className="mt-8">
        <p className='text-sm text-gray-600'>{date.toLocaleString()}</p>
      <h1 className='font-bold text-2xl text-gray-700 tracking-wide'>{title}</h1>
      <p className='line-clamp-3 text-gray-400 mt-4 tracking-tight'>{<RichTextRenderer richTextDocument={body}/>}</p>
    </CardContent>
    <CardFooter>
      <p className='tracking-wider font-semibold text-gray-500'>Read More...</p>
    </CardFooter>
  </Card>
  </div>
  )
}

export default BlogPostCard
