import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import ManagerService from "../services/manager.service";

////////////////////////// MessInfo  ////////////////////////
export const createMess = createAsyncThunk(
  "man/createMess",
  async (messInfo, thunkAPI) => {
    try {
      const data = await ManagerService.createMess(messInfo);
      // return { apatrments: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getMessInfo = createAsyncThunk(
  "man/getMessInfo",
  async (args, thunkAPI) => {
    try {
      const data = await ManagerService.getMessInfo();

      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const updateMessInfo = createAsyncThunk(
  "man/updateMess",
  async (updatedData, thunkAPI) => {
    try {
      const data = await ManagerService.updateMessInfo(updatedData);
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

////////////////////////// Expense  ////////////////////////
export const createExpense = createAsyncThunk(
  "man/createExpense",
  async (expenseInfo, thunkAPI) => {
    try {
      await ManagerService.createExpense(expenseInfo);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getMonthlyExpense = createAsyncThunk(
  "man/getMonthlyExpense",
  async ({ month, year }, thunkAPI) => {
    try {
      const data = await ManagerService.getMonthlyExpense({ month, year });

      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = {
  isSuccess: false,
  isPending: false,
  messInfo: {},
  monthlyExpense: [],
};

const managerSlice = createSlice({
  name: "man",
  initialState,
  extraReducers: {
    ////////////////////////// MessInfo  ////////////////////////
    [createMess.pending]: (state, action) => {
      state.isPending = true;
    },
    [createMess.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isPending = false;
    },
    [createMess.rejected]: (state, action) => {
      state.isSuccess = false;
      state.isPending = false;
    },

    [getMessInfo.pending]: (state, action) => {
      state.isPending = true;
    },
    [getMessInfo.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isPending = false;
      state.messInfo = action.payload;
    },
    [getMessInfo.rejected]: (state, action) => {
      state.isSuccess = false;
      state.isPending = false;
      state.messInfo = {};
    },
    [updateMessInfo.pending]: (state, action) => {
      state.isPending = true;
    },
    [updateMessInfo.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isPending = false;
    },
    [updateMessInfo.rejected]: (state, action) => {
      state.isSuccess = false;
      state.isPending = false;
    },

    ////////////////////////// Expense  ////////////////////////
    [createExpense.pending]: (state, action) => {
      state.isPending = true;
      state.isSuccess = false;
    },
    [createExpense.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isPending = false;
    },
    [createExpense.rejected]: (state, action) => {
      state.isSuccess = false;
      state.isPending = false;
    },

    [getMonthlyExpense.pending]: (state, action) => {
      state.isPending = true;
    },
    [getMonthlyExpense.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isPending = false;
      state.monthlyExpense = action.payload;
    },
    [getMonthlyExpense.rejected]: (state, action) => {
      state.isSuccess = false;
      state.isPending = false;
      state.monthlyExpense = [];
    },

    // [addNewApartment.fulfilled]: (state, action) => {
    //   state.isSuccess = true;
    //   state.isAdded = true;
    //   // state.apatrments = action.payload;
    // },
    // [addNewApartment.rejected]: (state, action) => {
    //   state.isSuccess = false;
    //   // state.apatrments = null;
    // },

    // [removeLevels.fulfilled]: (state, action) => {
    //   state.isSuccess = true;
    //   state.isAdded = true;
    // },
    // [removeLevels.rejected]: (state, action) => {
    //   state.isSuccess = false;
    // },
  },
});

const { reducer } = managerSlice;
export default reducer;
