import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { BsCloudUpload } from 'react-icons/bs';
import { ImagetoBase64 } from '../utility/ImagetoBase64';
const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  })

  const handleOnChange = (e) => {
    console.log(e.target.value,"rakejsjsj")
    const {name, value} = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })

  }

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0])

    setData((preve)=>{
      return{
        ...preve,
        image:data
      }
    })
    console.log(data, "file upload")

  }

  const handleSubmit = async(e) =>{
    e.preventDefault();

    const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/addProduct`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })

    const dataRes = await fetchData.json();
    toast(dataRes.message)
     
  console.log(data,"data submit sofrm")


  }
console.log(process.env.REACT_APP_ADMIN_EMAIL,"email id ")
  return (
    <div className='p-4'>
      <form onSubmit={handleSubmit} className='m-auto w-full max-w-md shadow flex flex-col bg-white'>
        <label htmlFor='name'>name</label>
        <input type={"text"} name="name" className='bg-slate-200 p-1 my-1' onChange={(e)=>handleOnChange(e)} />


        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' name='category' onChange={handleOnChange}>
        <option value={"other"}>select category</option>
          <option value={"fruits"}>Fruits</option>
          <option value={"vegetable"}>Vegetable</option>
          <option value={"icream"}>Icream</option>
          <option value={"dosa"}>Dosa</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"rice"}>rice</option>
          <option value={"cake"}>Cake</option>
          <option value={"burger"}>Burger</option>
          <option value={"panner"}>Panner</option>
          <option value={"sandwich"}>Sandwich</option>

        </select>


        <label htmlFor='image'>Image
          <div className='h-44 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer'>
            {data.image ? <img src={data.image} className="h-full" />:  <span className='text-4xl'><BsCloudUpload /></span> }
           
            <input type={"file"} id="image" onChange={uploadImage} accept="image/*" className="hidden" />
          </div>
        </label>

        <label htmlFor='price' className='my-1'>Price</label>
        <input type={"text"} name="price" className='bg-slate-200 p-1 my-1' onChange={handleOnChange} />

        <label htmlFor='description' className='my-1'>Description</label>
        <textarea name='description' rows={3} className='bg-slate-200 p-1 my-1 resize-none' onChange={handleOnChange}></textarea>

        <button type='submit' className='bg-red-500  hover:bg-red-600 text-md text-white font-bold drop-shadow mx-2 my-2 '>Save</button>


      </form>
    </div>
  )
}

export default NewProduct