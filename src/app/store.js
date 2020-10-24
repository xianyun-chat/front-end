import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import roomReducer from '../features/roomSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    room: roomReducer,
  },
});
