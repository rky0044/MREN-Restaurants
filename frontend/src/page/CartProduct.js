import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TbPlus, TbMinus } from "react-icons/tb"
import {AiFillDelete} from"react-icons/ai"
import { deleteCartItems,increaseQty,decreaseQty } from '../redux/productSlice'

const CartProduct = (props) => {


  
  const dispatch = useDispatch();
  console.log(props.id,"iddddddd in cardproduct page")



  return (
    <div className=' bg-slate-200 p-2 flex gap-4 rounded border border-slate-300'>
      <div className='bg-white p-3 rounded overflow-hidden'>
        <img src={props.image} alt='bbb' className='h-28 w-40   object-cover' />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className='flex justify-between'> 

        
        <h3 className="font-semibold text-slate-600  capitalize text-lg md:text-xl">
          {props.name}
        </h3>
        <div className='cursor-pointer text-slate-700 hover:text-red-500 ' onClick={()=>dispatch(deleteCartItems(props.id))}>
         
            <AiFillDelete />
         
        </div>
        </div>
        <p className=" text-slate-500  font-medium ">{props.category}</p>
        <p className=" font-bold text-base">
          <span className="text-red-500 ">₹</span>
          <span>{props.price}</span>
        </p>

        <div className='flex justify-between'>
          <div className="flex gap-3 items-center ">

            <button onClick={()=>dispatch(increaseQty(props.id))} className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1">
              <TbPlus />
            </button>
            <p>{props.qty}</p>
            <button onClick={()=>dispatch(decreaseQty(props.id))} className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1">
              <TbMinus />
            </button>
          </div>

          <div className='flex items-center gap-1 font-medium text-slate-700'  >
            <p>Total:</p>
            <p>{props.total}</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CartProduct