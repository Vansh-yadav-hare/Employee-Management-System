import { data } from 'autoprefixer'
import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div><div className=' flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>{data.category}</h3>
                
                <h4>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2 '>
             {data.description}
            </p>
             <div className='mt-2'>
                <button className='w-full'>Failed</button>

            </div>
        </div>
        </div>
  )
}

export default FailedTask