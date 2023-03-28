import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   firstName:"",
   lastName:"",
   image: "",
   _id:"",
   email:""
}  
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      loginRedux: (state, action) => {
        console.log(action.payload,"action data call");
        //   state.user = action.payload.data;
        state._id = action.payload._id;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.image = action.payload.image;
      },
      logOutRedux:(state,action)=>{
        state._id = "";
        state.firstName = "";
        state.lastName =  "";       
        state.email = "";
        state.image = "";

      },
      
    
    },
  });

  export const { loginRedux,logOutRedux} = userSlice.actions;

  export default userSlice.reducer;