import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "utilies/storage/user";

const userSlice = createSlice({
  name: "user",
  initialState: getUser(),
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
