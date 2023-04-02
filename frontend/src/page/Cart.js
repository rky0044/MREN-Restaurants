import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from './CartProduct'

const Cart = (props) => {

  const poductCartItem = useSelector((state)=> state.product.cartItme)
  console.log(poductCartItem ,"cart ITme")
  return (
    <div className='p-2 md:p-4'>
        <h2 className='text-lg md:text-2xl font-bold text-slate-600'>
        your cart items
        </h2>
        <div className=''>
            {/* display cart items */}
            <div className=''></div>

            {/* total cart itme*/}

            {
              poductCartItem.map(el=>{
                return(
                  <CartProduct 
                  key={el._id} 
                  name={el.name}
                  category={el.category}
                  image={el.image}
                  price={el.price}
                  qty ={el.qty}
                  total= {el.total}
                 

                  />
                )
              })

            }

            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Cart