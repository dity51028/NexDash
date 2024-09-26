import React from 'react'
import Title from '../../UI/Title'
import { users } from '../../constants'
import Member from './Member'

const Team = () => {
  return (
    <div className='bg-white p-3 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5'>
        <Title>
            Teams
        </Title>
        {
            users.map((item,id)=>{
              return(  
              <Member key={id} item={item}/>
            )})
        }
    </div>
  )
}

export default Team