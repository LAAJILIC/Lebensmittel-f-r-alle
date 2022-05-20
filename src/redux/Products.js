import { createSlice } from '@reduxjs/toolkit';
import { DBgroceries } from '../MOCK_DATA_groceries'; 


export const productSlice = createSlice({
    name: "products",
    initialState: { value: DBgroceries },
    reducers: {
        addProduct: (state, action) => {
          state.value.push(action.payload);
        },

        deleteProduct: (state, action) => {
            state.value = state.value.filter((product) => product.id !== action.payload.id);
        },

        updatePrice: (state, action) => {
            state.value.map((product) => {
                if (product.id === action.payload.id)
                { product.price = action.payload.price; }
            });
        },
    },
});


export const { addProduct, deleteProduct, updatePrice } = productSlice.actions;
export default productSlice.reducer;