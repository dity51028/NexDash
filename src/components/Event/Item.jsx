import React from 'react'

const Item = ({events}) => {
  return (
    <div className='flex gap-5 items-center'>
        <span className='bg-gray-300 text-gray-700 p-2 rounded-lg h-16 w-16 font-bold text-center'>{events.date}</span>
        <div>
            <h1 className='text-xl font-bold'>{events.title}</h1>
            <p className='text-gray-400'>{events.description}</p>
        </div>
        </div>
  )
}

export default Item