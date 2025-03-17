import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchStockData } from "../services/financialService";

export const fetchStock = createAsyncThunk("finance/fetchStock", async (symbol: string) => {
  return await fetchStockData(symbol);
});

interface FinanceState {
    data: any;
    loading: boolean;
    error: string | null;
  }
  
  const initialState: FinanceState = {
    data: null,
    loading: false,
    error: null,
  };

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStock.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStock.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStock.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default financeSlice.reducer;
