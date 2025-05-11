import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteTransaction,
  editTransaction,
  getTransactions,
  postTransaction,
} from "./transactionApi";

const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchTransactions = createAsyncThunk(
  "transaction/fetchTransactions",
  async () => {
    const transactions = await getTransactions();
    return transactions;
  }
);
export const createTransactions = createAsyncThunk(
  "transaction/createTransactions",
  async (data) => {
    const transaction = await postTransaction(data);
    return transaction;
  }
);
export const changeTransactions = createAsyncThunk(
  "transaction/changeTransaction",
  async ({ id, data }) => {
    const transaction = await editTransaction(id, data);
    return transaction;
  }
);
export const removeTransactions = createAsyncThunk(
  "transaction/removeTransaction",
  async (id) => {
    const transaction = await deleteTransaction(id);
    return transaction;
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.transactions = [];
        state.error = action.error.message;
      })

      .addCase(createTransactions.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createTransactions.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions.push(action.payload);
      })
      .addCase(createTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })

      .addCase(changeTransactions.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeTransactions.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        const indexToUpdate = state.transactions?.findIndex(
          (t) => t?.id === action.payload.id
        );
        state.transactions[indexToUpdate] = action.payload;
      })
      .addCase(changeTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.transactions = [];
        state.error = action.error.message;
      })

      .addCase(removeTransactions.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeTransactions.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions = state.transactions.filter((t)=> t.id !== action.payload)
      })
      .addCase(removeTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.transactions = [];
        state.error = action.error.message;
      });
  },
});

export default transactionSlice;

