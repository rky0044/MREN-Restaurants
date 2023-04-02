import React,{useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './component/Header.js';
import { Toaster } from 'react-hot-toast';
import { setDataProduct } from './redux/productSlice';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    (async()=>{
      const res =await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`)
      const resData = await res.json()
      
     
      dispatch(setDataProduct(resData))
    }) ()
  },[])
  return (
    <>
    <Toaster />
    <div>
        <Header />
        <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'> 
          <Outlet />
        </main>
      </div>
      </>
  );
}

export default App;
