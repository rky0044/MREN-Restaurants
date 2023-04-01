import React from 'react'

const CardFeature = (props) => {
  return (
    <div className=' min-w-200px w-full bg-white hover:shadow-lg  drop-shadow-lg py-5 px-4 flex flex-col cursor-pointer'>

        <div className='h-28 flex flex-col justity-center items-center'>
            <img src={props.image} className="h-full" />
        </div>
        <h3 className='font-semibold text-slate-600 capitalize text-lg '>
          {props.name}
        </h3>
        <p className=' text-slate-500 font-medium'>{props.category}</p>
        <p className=' font-bold '>
          <span className='text-red-500'>₹</span>
          <span>{props.price}</span>
        </p>
      <button className='bg-yellow-500 py-1 rounded mt-3'>add cart</button>

    </div>
  )
}

export default CardFeature