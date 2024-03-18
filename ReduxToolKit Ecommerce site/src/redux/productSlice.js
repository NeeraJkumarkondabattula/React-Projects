import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // productsFetch: (state, action) => {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export const { productsFetch } = productSlice.actions;
export default productSlice.reducer;

// export const getProducts = () => {
//   return async function getProductsThunk(dispatch, getState) {
//     const { products } = await fetch("https://dummyjson.com/products").then(
//       (res) => res.json()
//     );
//     dispatch(productsFetch(products));
//   };
// };

export const getProducts = createAsyncThunk("products/get", async () => {
  const { products } = await fetch("https://dummyjson.com/products").then(
    (res) => res.json()
  );
  return products;
});
