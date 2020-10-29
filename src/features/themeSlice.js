import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themeId: null,
  },
  reducers: {
    setTheme: (state, action) => {
        state.themeId = action.payload.themeId;
    },
  },
});


export const { setTheme } = themeSlice.actions;

export const selectThemeId = (state) => state.theme.themeId;

export default themeSlice.reducer;
