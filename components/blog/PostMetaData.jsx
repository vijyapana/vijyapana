import React from 'react'

function PostMetaData({date}) {
  return (
    <div className='flex items-center mt-4 gap-x-2'>
      <div className='h-6 w-12 bg-purple-600 rounded-sm'></div>
        <p className='font-thin text-lg'>Vijyapana</p>
        <p className='font-thin text-lg'>{date}</p>
    </div>
  )
}

export default PostMetaData
