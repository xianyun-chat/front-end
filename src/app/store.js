import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import roomReducer from '../features/roomSlice';
import themeReducer from '../features/themeSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    room: roomReducer,
    theme: themeReducer,
  },
});
