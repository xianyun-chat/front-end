import { createSlice } from '@reduxjs/toolkit';

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    roomId: null,
    roomName: null,
  },
  reducers: {
    setRoom: (state, action) => {
      state.roomId = action.payload.roomId;
      state.roomName = action.payload.roomName;
    },
  },
});

export const { setRoom } = roomSlice.actions;

export const selectRoomName = (state) => state.room.roomName;
export const selectRoomId = (state) => state.room.roomId;

export default roomSlice.reducer;
