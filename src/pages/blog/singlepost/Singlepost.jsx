import React from 'react'
import Content from './Content'
import PostLeftSidebar from './PostLeftSidebar'

const Singlepost = () => {
  return (
    <div className='flex flex-row container mx-auto'>
        <div className='bg-gray-400 w-1/3 '>
            <PostLeftSidebar />
        </div>
        <div className='bg-slate-500 w-2/3'>
            <Content />
        </div>
    </div>
  )
}

export default Singlepost