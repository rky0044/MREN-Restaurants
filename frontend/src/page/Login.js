import React,{useState} from 'react'
import loginSignupImg from '../assest/login-animation.gif'
import { BiShow,BiHide } from 'react-icons/bi';
import { Link,useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
    const [showPassword,setShowPassword]= useState(false);


  const [data,setData] = useState({
  
    email:"",
    password:"",
    
  })
console.log(data,"datata");
  const haldleShowPass = (preve) =>{
    setShowPassword(preve =>!preve);
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

  const handlesubmit = (e) =>{

    e.preventDefault();
    const {email,password} = data
    if( email && password){
      alert("data succfull login");
      navigate("/sigin");
    }
    else{
      alert("enter require feild")
    }
  }
  return (
    <div className='p-2 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex flex-col items-center p-4'>
            {/* <h1 className='text-center text-2xl font-bold'>sign up</h1> */}
            <div className='w-16 overflow-hidden rounded-full drop-shadow-md shadow-md'>
            <img src={loginSignupImg}  alt='' className='w-full' />

            </div>
            <form className='w-full py-3 flex flex-col' onSubmit={handlesubmit}>
             
            
              <label htmlFor='email'>Email </label>
              <input type={'email'} name="email"  onChange={handleOnChange}  className='w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.email} />

              <label htmlFor='password'>Password</label>

             <div className='flex px-2 py-1 mt-1 mb-2 bg-slate-200 rounded'>
              <input  type={showPassword ? 'text' : 'password'} name="password"  onChange={handleOnChange}  className='w-full bg-slate-200 border-none outline-none' value={data.password}/>
              <span onClick={haldleShowPass} className='flex text-xl'>
               {showPassword ?<BiShow />: <BiHide />} 
              </span>
             </div>

             
            
            <button className='w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>login</button>
            
            </form>
            <p className='text-sm' >Don't have an account please <Link to={'/signup'} className=' text-sm text-red-500 underline'>Sign up</Link> </p>
        </div>
    </div>
  )
}

export default Login