import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userData: {},
  initializing: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleLogin: (state: typeof initialState) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setUserData: (
      state: typeof initialState,
      action: PayloadAction<{ email: string } | Record<string, unknown>>
    ) => {
      state.userData = action.payload;
    },
    toggleInitializing: (
      state: typeof initialState,
      action: PayloadAction<boolean>
    ) => {
      state.initializing = action.payload;
    },
  },
});

export const { toggleLogin, setUserData, toggleInitializing } =
  userSlice.actions;

export default userSlice.reducer;
