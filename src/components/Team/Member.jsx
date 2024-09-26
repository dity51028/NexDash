import React from 'react'

const Member = ({item}) => {
    console.log("hi");
    console.log(item);
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
            <img src={item.image} alt={item.name} className='w-12 h-12 rounded-full flex'/>
            <div>
                <h2 className='font-bold'>{item.name}</h2>
                <span className='font-semibold text-gray-400 text-sm'>{item.country}</span>
            </div>
        </div>
        <span className={`${item.bgColor} p-3 rounded-full text-xs text-gray-700 font-semibold dark:bg-gray-500 dark:text-gray-300 `}>{item.role}</span>
    </div>
  )
}

export default Member