import React from 'react'
import { useSelector } from 'react-redux'
import CardFeature from '../component/CardFeature';
import HomeCard from '../component/HomeCard'

const Home = (props) => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData, "fome card");

  const homeProductCardList = productData.slice(0, 4);
  console.log(homeProductCardList, "homeProductCardList");
   

  const homeProductCardListVegetables = productData.filter(el => el.category === "vegetable")

 const loadingArr = new Array(4).fill(null) 


  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

        <div className='w-1/2 '>
          <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img src='https://cdn-icons-png.flaticon.com/512/2972/2972185.png' className='h-7' />
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-3'>The Fasted Delivery in  <span className='text-red-600'>Your Home</span></h2>
          <p className='py-3 text-base text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded'>Order now</button>
        </div>
        <div className='w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
          {
            homeProductCardList[0] ? homeProductCardList.map(el => {
              return (

                <HomeCard
                  key={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              )
            })
            :loadingArr.map((el,index)=>{
              return(
                <HomeCard 
                key={index}
                loading={"Loading...."}
                />
              )
            })
          }

        </div>


      </div>
      <div className=''>
        <h2 className='font-bold text-2xl text-slate-800'>Fress Vegitables</h2>
        <div className='flex gap-5'>
          {
            homeProductCardListVegetables && homeProductCardListVegetables.map(el => {
              return(

                <CardFeature 
                  key={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              )
            })
          }
        </div>

        </div>

    </div>
  )
}

export default Home