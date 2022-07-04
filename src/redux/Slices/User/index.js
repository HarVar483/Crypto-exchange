import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userInformation",
  initialState: {
    userInformation: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.userInformation = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
