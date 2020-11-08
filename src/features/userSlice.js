import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    userName: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
    }
  },
});


export const {setUser} = userSlice.actions;

export const selectUserId = (state) => state.user.userId;
export const selectUserName = (state) => state.user.userName;
export default userSlice.reducer;
