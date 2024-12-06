import React from 'react'
import RichTextRenderer from './RichTextFormatter'
import { Separator } from '../ui/separator'

function Post({obj}) {
  return (
    <div className='mt-16 font-serif leading-8 lg:w-[90%]'>
      <RichTextRenderer richTextDocument={obj}/>
      <p className='text-lg text-gray-500 mt-8 mb-16'>~Team Vijyapana</p>
    </div>
  )
}

export default Post
