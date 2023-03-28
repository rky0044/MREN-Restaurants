import React, { useState } from 'react';
import loginSignupImg from '../assest/login-animation.gif'
import { BiShow,BiHide } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { ImagetoBase64 } from '../utility/ImagetoBase64';
import {toast} from 'react-hot-toast';


const Signup = () => {
  const navigate = useNavigate();
  const [showPassword,setShowPassword]= useState(false);
  const [showConPassword,setShowConPassword]= useState(false);

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    image:""
    
  })


  const haldleShowPass = (preve) =>{
    setShowPassword(preve =>!preve);
  }

  const haldleShowConPass = (preve) =>{
    setShowConPassword(preve =>!preve);
  }

  const handleOnChange = (e)=>{
   const {name,value}=e.target

  setData((data)=>{
    return{
      ...data,
      [name]:value

    }
  })
    
  }

  const handleUploadProfileImg = async(e) =>{
   
    const data= await ImagetoBase64(e.target.files[0])

    setData((preve)=>{
       return{
        ...preve,
        image:data
       }
    })
    
    console.log(data.image,"file");
  }

  const handlesubmit = async(e) =>{

    e.preventDefault();
    const {firstName,email,password,confirmPassword} = data

    if(firstName && email && password && confirmPassword){
     if(password === confirmPassword){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
        method : "POST",
        headers:{
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)

      })

      const dataRes = await fetchData.json();
      
      toast(dataRes.message)
      if(dataRes.success){
         navigate("/login");
      }
     }
     else{

      alert("password and confirm password not equal")
     }
    }
  }



  return (
    <div className='p-3 md:p-4'>
        <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
            {/* <h1 className='text-center text-2xl font-bold'>sign up</h1> */}
            <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative'>
            <img src={data.image ? data.image : loginSignupImg}  alt='' className='w-full' />
            <label htmlFor='profileImage'>
              <div className='bg-slate-500 bg-opacity-30 absolute bottom-0 h-1/3 text-center w-full cursor-pointer'>
                <p className='text-sm text-white '>
                  upload
                </p>
              </div>
              <input type={"file"} id="profileImage" accept='image/*' className='hidden' onChange={handleUploadProfileImg}/>
              </label>
            </div>
            <form className='w-full py-3 flex flex-col' onSubmit={handlesubmit}>
              <label htmlFor='firstName'>First Name </label>
              <input type={'text'} name="firstName" onChange={handleOnChange}  className='w-full mb-2 mt-1 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.firstName}/>
             
              <label htmlFor='lastName'>Last Name </label>
              <input type={'text'} name="lastName"  onChange={handleOnChange}  className='w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.las
              } />
            
              <label htmlFor='email'>Email </label>
              <input type={'email'} name="email"  onChange={handleOnChange}  className='w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.email} />

              <label htmlFor='password'>Password</label>

             <div className='flex px-2 py-1 mt-1 mb-2 bg-slate-200 rounded'>
              <input  type={showPassword ? 'text' : 'password'} name="password"  onChange={handleOnChange}  className='w-full bg-slate-200 border-none outline-none' value={data.password}/>
              <span onClick={haldleShowPass} className='flex text-xl'>
               {showPassword ?<BiShow />: <BiHide />} 
              </span>
             </div>

             <label htmlFor='confirmPassword'>ConfirmPassword</label>
             <div className='flex px-2 py-1 mt-1 mb-2 bg-slate-200 rounded'>
              <input  type={showConPassword ? 'text' : 'password'} name="confirmPassword"  onChange={handleOnChange}  className='w-full bg-slate-200 border-none outline-none' value={data.confirmPassword} />
              <span onClick={haldleShowConPass} className='flex text-xl'>
               {showConPassword ?<BiShow />: <BiHide />} 
              </span>
             </div>
            
            <button className='w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign up</button>
            
            </form>
            <p className='text-sm' >have an account please <Link to={'/login'} className=' text-sm text-red-500 underline'>login</Link> </p>
        </div>
    </div>
  )
}

export default Signup