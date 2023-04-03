import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    productList : [],
    cartItme :[]
}

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setDataProduct: (state,action)=>{
          
            state.productList =[...action.payload]
           

        },
        addCartItmes : (state,action)=>{
            const check = state.cartItme.some(el=>el._id === action.payload._id);
            const index = state.cartItme.findIndex((el)=>el._id === action.payload._id);
            console.log(check,"add index");

           if(check){
            toast("Already item in cart")
           }
           else{
            toast("One item add successfully")
            const total = action.payload.price
            state.cartItme= [...state.cartItme,{...action.payload , qty:1 , total : total}]
           }
          
            
        },
        deleteCartItems : (state,action)=>{
           
            toast("One item delete")
            const index = state.cartItme.findIndex((el)=>el._id === action.payload);
            state.cartItme.splice(index,1)
           

        },
        increaseQty : (state,action)=>{
           
            const index = state.cartItme.findIndex((el)=>el._id === action.payload);
            let qty= state.cartItme[index].qty;
            const incQty = ++qty
            state.cartItme[index].qty = incQty;

            const price = state.cartItme[index].price;

            const total = price * incQty;

            state.cartItme[index].total = total;

        },
        decreaseQty : (state,action)=>{
           
            const index = state.cartItme.findIndex((el)=>el._id === action.payload);
            let qty= state.cartItme[index].qty;
           
            if(qty > 1){
               const  decQty = --qty
                state.cartItme[index].qty = decQty;

                const price = state.cartItme[index].price;

                const total = price * decQty;

            state.cartItme[index].total = total;
            }

        },
    }

})

export const {setDataProduct,addCartItmes,deleteCartItems,increaseQty,decreaseQty} = productSlice.actions;
export default productSlice.reducer;