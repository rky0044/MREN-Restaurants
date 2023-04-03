import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from './CartProduct'

const Cart = (props) => {

  const poductCartItem = useSelector((state) => state.product.cartItme)
  console.log(poductCartItem, "cart ITme");

  const totalPrice = poductCartItem.reduce((acc, curr) => acc + parseInt(curr.total), 0);

  const totalQty = poductCartItem.reduce((acc, curr) => acc + parseInt(curr.qty), 0);
  return (
    <div className='p-2 md:p-4'>
      <h2 className='text-lg md:text-2xl font-bold text-slate-600'>
        your cart items
      </h2>
      <div className='my-4 flex gap-3'>
        {/* display cart items */}
        <div className='w-full max-w-3xl '>

        {/* total cart itme*/}

        {
          poductCartItem.map(el => {
            return (
              <CartProduct
                key={el._id}
                id={el._id}
                name={el.name}
                category={el.category}
                image={el.image}
                price={el.price}
                qty={el.qty}
                total={el.total}


              />
            )
          })

        }
</div>
        <div className='w-full max-w-md  ml-auto '>
          <h2 className='bg-blue-500 text-white font-bold p-2 text-lg'>Summery</h2>
          <div className='flex w-full py-2 text-lg border-b'>
            <p >Total Qty</p>
            <p className='ml-auto w-32 font-bold'>{totalQty}</p>

          </div>


          <div className='flex w-full py-2 text-lg border-b'>
            <p>Total price</p>
            <p className='ml-auto w-32 font-bold'>

              <span className='text-red-500'>₹</span> {totalPrice}</p>

          </div>

          <div className=''>
            <button className='bg-red-500 w-full text-lg font-bold py-2 text-white'>Payment</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart