import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGift } from "../../types/gift";

// Define a type for the slice state
export interface IInitialState {
  gift: IGift[];
}

// Define the initial state using that type
const initialState: IInitialState = {
  gift: [],
};

export const giftSlice = createSlice({
  name: "gifState",
  initialState,
  reducers: {
    setGifts: (state, action: PayloadAction<IGift[]>) => {
      state.gift = action.payload;
    },
    resetGifts: (state) => {
      state.gift = [];
    },
  },
});

export const { setGifts, resetGifts } = giftSlice.actions;
export default giftSlice.reducer;