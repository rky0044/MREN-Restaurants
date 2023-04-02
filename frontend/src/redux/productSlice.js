import { createSlice } from "@reduxjs/toolkit";

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
            console.log(action.payload,"bbbbbbbbbbbb")
            const total = action.payload.price
            state.cartItme= [...state.cartItme,{...action.payload , qty:1 , total : total}]
            
        },
        deleteCartItems : (state,action)=>{

        }
    }

})

export const {setDataProduct,addCartItmes,deleteCartItems} = productSlice.actions;
export default productSlice.reducer;