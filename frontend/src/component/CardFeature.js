import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCartItmes,deleteCartItems } from '../redux/productSlice'

const CardFeature = (props) => {
  const dispatch = useDispatch();

  const handleAddCartProduct = (e) =>{
   
    e.stopPropagation();
    dispatch(addCartItmes(
      {
        _id:props.id,
        name: props.name,
        category:props.category,
        image:props.image,
        price:props.price
      }
      
      ))

  }
  
  return (

    <div className=' min-w-200px max-w-[200px] w-full bg-white hover:shadow-lg  drop-shadow-lg py-5 px-4 flex flex-col cursor-pointer'>
      {
        props.image ? (
          <>
          <Link to={`/menu/${props.id}`} onClick={()=>window.scrollTo({top:"0", behavior:"smooth"})}>
           <div className='h-28 flex flex-col justity-center items-center'>
            <img src={props.image} className="h-full" />
        </div>
        <h3 className='font-semibold text-slate-600 capitalize text-lg whitespace-nowrap overflow-hidden '>
          {props.name}
        </h3>
        <p className=' text-slate-500 font-medium'>{props.category}</p>
        <p className=' font-bold '>
          <span className='text-red-500'>₹</span>
          <span>{props.price}</span>
        </p>
        </Link>
      <button className='bg-yellow-500 py-1 rounded mt-3 w-full' onClick={handleAddCartProduct}>add cart</button>

     
          </>

        ):
        <div className='min-h-[150px] flex justify-center itme-center'>
            <p>{props.loading}</p>
        </div>

        
      }
       




    </div>
  )
}

export default CardFeature