import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../assest/logo.png';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { BsCartFill } from 'react-icons/bs';

const Header = () => {
  const [showMenu,SetShowMenu] = useState(false);
  const handlaShowMenu = (preve)=>{
    SetShowMenu(preve => !showMenu);
  } 
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white '>
      {/* desktop */}
      <div className='flex items-center h-full justify-between'>
        <Link to={"/"} >
          <div className='h-12'>
            <img src={logo} className="h-full" alt="" />
          </div>
        </Link>

        <div className='flex items-center gap-5 md:gap-6 text-base md:text-lg'>
          <nav className='flex gap-4 md:gap-7 text-base md:text-lg'>
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>



          </nav>
          <div className='text-2xl text-slate-600 relative' >
            <BsCartFill />
            <div className='absolute -top-2 right-0 text-white bg-red-500 h-4 w-4 m-0 text-base text-center rounded-full'>
              0
            </div>
          </div>
          <div className='text-slate-600'  onClick={handlaShowMenu}>
            <div className='text-3xl cursor-pointer'>
              <HiOutlineUserCircle />
            </div>
            {
              showMenu && (
                <div className='absolute right-2 px-2 py-2 bg-white shadow drop-shadow-md flex flex-col'>
                <Link to={"newProduct"} className='whitespace-nowrap cursor-pointer '>New product</Link>
                <Link to={"login"} className='whitespace-nowrap cursor-pointer '>Login</Link>
  
              </div>

              )
            }
           
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  )
}

export default Header;