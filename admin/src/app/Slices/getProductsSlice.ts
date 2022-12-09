import { dataType, productsStateType } from './../Types/types';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const getFormData = createAsyncThunk(
    "get-form-data",
    async (data: dataType, { dispatch }) => {
        await axios.post("/api/add", data);
        dispatch(getProducts());
    }
)


export const getProducts = createAsyncThunk(
    "get-products",
    async () => {
        const { data } = await axios.get("/api/products");
        return data;
    }
)

export const deleteProduct = createAsyncThunk(
    "delete-product",
    async (id: any, { dispatch }) => {
        const { data } = await axios.delete(`/api/remove/${id}`);
        dispatch(getProducts());
    }
)

const initialState: productsStateType = {
    products: [],
    admin: false
}


const getProductsSlice = createSlice({
    name: "get-products",
    initialState,
    reducers: {
        setAdmin(state, action) {
            state.admin = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
    }
})

export const { setAdmin } = getProductsSlice.actions;

export default getProductsSlice.reducer;