import React from 'react'

function PostMetaData({date}) {
  return (
    <div className='flex items-center mt-4 gap-x-2 mb-2 justify-between sm:justify-start'>
      
      <div className='h-4 w-4 sm:h-6 sm:w-6 bg-purple-600 rounded-sm'></div>
      <div className='flex gap-x-2'>
        <p className='font-thin text-md  sm:text-lg'>Vijyapana</p>
        <p className='font-thin text-md sm:text-lg'>{date}</p>
        </div>
    </div>
  )
}

export default PostMetaData
