import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = (props) => {

    return (
        <div className=' bg-white md:shadow p-2 rounded min-w-[150px]'>
            {
                props.name ?(
                   
                <>
                  <Link to={`/menu/${props.id}`} onClick={()=>window.scrollTo({top:"0", behavior:"smooth"})}>
                    <div className='w-40 min-h-[150px]'>
                        <img src={props.image} className="h-full w-full" />
                    </div>
                    <h3 className='font-semibold text-slate-600 text-center capitalize text-lg'>{props.name}</h3>
                    <p className='text-center text-slate-500 font-medium'>{props.category}</p>
                    <p className='text-center font-bold' ><span className='text-red-500'>₹</span><span>{props.price}</span></p> 
                   </Link>
               </>
                )
                : 
                <p className='flex justify-center items-center h-full'>
                    {props.loading}
                </p>
            }
        </div>
    )
}

export default HomeCard