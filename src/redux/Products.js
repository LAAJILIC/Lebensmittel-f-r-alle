import { createSlice } from '@reduxjs/toolkit';
import { DBgroceries } from '../MOCK_DATA_groceries'; 


export const productSlice = createSlice({
    name: "products",
    initialState: { value: DBgroceries },
    reducers: {
        addProduct: (state, action) => {
          state.value.push(action.payload);
        },
    },
})


export const {addProduct} = productSlice.actions;
export default productSlice.reducer;