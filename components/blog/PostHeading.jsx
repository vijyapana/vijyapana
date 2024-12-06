import React from 'react'

function PostHeading({text}) {
  return (
    <h1 className='text-lg mt-12 text-5xl font-bold tracking-wide first-letter:font-serif first-letter:text-7xl'>
      {text}
    </h1>
  )
}

export default PostHeading
