import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

export const reloading = createAsyncThunk("reload", async (args, thunkAPI) => {
  try {
    // const data = await ManagerService.createMess(messInfo);
    // return { apatrments: data };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

const initialState = {
  isReload: false,
};

const reload = createSlice({
  name: "reload",
  initialState,
  extraReducers: {
    [reloading.fulfilled]: (state, action) => {
      state.isReload = true;
    },
    [reloading.rejected]: (state, action) => {
      state.isReload = false;
    },
  },
});

const { reducer } = reload;
export default reducer;
