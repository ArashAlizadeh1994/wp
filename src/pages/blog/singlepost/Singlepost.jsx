import React from 'react'
import Content from './Content'
import PostLeftSidebar from './PostLeftSidebar'

const Singlepost = () => {
  return (
    <div dir='rtl' className='flex flex-row gap-4 mx-auto'>
        <div className='bg-slate-200 w-4/5 rounded-lg'>
            <Content />
        </div>
        <div className='bg-gray-300 w-1/5 rounded-lg'>
            <PostLeftSidebar />
        </div>
    </div>
  )
}

export default Singlepost