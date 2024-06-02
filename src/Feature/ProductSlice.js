import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const getItems = createAsyncThunk("donation-items", async() =>{
    const response = await axios.get("https://all-in-one-rew7.onrender.com/item/allitems")
                    .then(res => res.data)
                    .catch(err => console.log(err))
    return response
})

const ProductSlice = createSlice({
    name: 'items',
    initialState: {
        product: [],
        isLoading: false,
        isError: false
    },
    
    extraReducers:(builder) =>{
        builder.addCase(getItems.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(getItems.fulfilled, (state, action) =>{
            state.isLoading = false
            state.product = action.payload.items
        })
        builder.addCase(getItems.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            console.log(action.payload)
        })
    }
})


export default  ProductSlice.reducer