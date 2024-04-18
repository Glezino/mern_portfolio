import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    portfolioData: null,
  },
  reducers: {
    hideLoading: (state, action) => {
      state.loading = false;
    },
    setPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
    showLoading: (state, action) => {
      state.loading = true;
    },
  },
});

export default rootSlice.reducer; // Y aquí exportamos solo el reducer
export const { hideLoading, setPortfolioData, showLoading } = rootSlice.actions; // Aquí exportamos las acciones
