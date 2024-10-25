import React from 'react'

const Content = ({title='موضوع مقاله', body="محتوا"}) => {
  return (
    <div className='p-4'>
      <h1 className='font-black'>موضوع مقاله</h1>
      <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad sint, corrupti incidunt laudantium accusantium non inventore placeat quisquam at, aspernatur doloribus eligendi labore necessitatibus nulla saepe. Eligendi natus aspernatur ex?
      </p>
    </div>
  )
}

export default Content