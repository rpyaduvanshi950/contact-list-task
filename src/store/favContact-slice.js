import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    contactKeys:[]
}
const favContactSlice= createSlice({
    name:'favContactsList',
    initialState,
    reducers:{
        setContactKeys:(state,action)=>{ 
            const {key,favKey} =action.payload
            state.contactKeys=[...state.contactKeys,{key,favKey}]
        }
    }
})

export const favContactsListActions = favContactSlice.actions;
export default favContactSlice;